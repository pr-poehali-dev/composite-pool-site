import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    '''Получение списка всех заявок из базы данных'''
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        dsn = os.environ.get('DATABASE_URL')
        schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
        
        conn = psycopg2.connect(dsn)
        cur = conn.cursor()
        
        cur.execute(f"""
            SELECT id, name, phone, created_at, status, notes 
            FROM {schema}.leads 
            ORDER BY created_at DESC
        """)
        
        rows = cur.fetchall()
        
        leads = []
        for row in rows:
            leads.append({
                'id': row[0],
                'name': row[1],
                'phone': row[2],
                'created_at': row[3].isoformat() if row[3] else None,
                'status': row[4],
                'notes': row[5]
            })
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'leads': leads,
                'total': len(leads)
            }),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Failed to fetch leads',
                'details': str(e)
            }),
            'isBase64Encoded': False
        }
