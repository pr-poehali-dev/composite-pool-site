import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Lead {
  id: number;
  name: string;
  phone: string;
  created_at: string;
  status: string;
  notes: string | null;
}

const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://functions.poehali.dev/4db9c61c-becf-4ac0-a6a1-a80a4bc27d7e');
      const data = await response.json();
      
      if (data.success) {
        setLeads(data.leads);
      } else {
        throw new Error('Failed to fetch leads');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось загрузить заявки',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Скопировано!',
      description: 'Телефон скопирован в буфер обмена',
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Админ-панель
              </h1>
              <p className="text-muted-foreground">Управление заявками с сайта</p>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={fetchLeads} variant="outline" disabled={loading}>
                <Icon name="RefreshCw" className={`mr-2 ${loading ? 'animate-spin' : ''}`} size={18} />
                Обновить
              </Button>
              <a href="/">
                <Button variant="outline">
                  <Icon name="Home" className="mr-2" size={18} />
                  На главную
                </Button>
              </a>
            </div>
          </div>

          <Card className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">{leads.length}</div>
                  <div className="text-sm text-muted-foreground">Всего заявок</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-1">
                    {leads.filter(l => l.status === 'new').length}
                  </div>
                  <div className="text-sm text-muted-foreground">Новых</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">
                    {leads.filter(l => new Date(l.created_at).toDateString() === new Date().toDateString()).length}
                  </div>
                  <div className="text-sm text-muted-foreground">Сегодня</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {loading ? (
            <div className="text-center py-12">
              <Icon name="Loader2" className="animate-spin mx-auto mb-4 text-primary" size={48} />
              <p className="text-muted-foreground">Загрузка заявок...</p>
            </div>
          ) : leads.length === 0 ? (
            <Card className="p-12 text-center">
              <Icon name="Inbox" className="mx-auto mb-4 text-muted-foreground" size={64} />
              <h3 className="text-xl font-bold mb-2">Заявок пока нет</h3>
              <p className="text-muted-foreground">Когда кто-то оставит заявку на сайте, она появится здесь</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {leads.map((lead) => (
                <Card key={lead.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                          <Icon name="User" className="text-white" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{lead.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {formatDate(lead.created_at)}
                          </p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        lead.status === 'new' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {lead.status === 'new' ? 'Новая' : lead.status}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Phone" className="text-primary" size={20} />
                        <a 
                          href={`tel:${lead.phone}`} 
                          className="text-lg font-semibold hover:text-primary transition-colors"
                        >
                          {lead.phone}
                        </a>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => copyToClipboard(lead.phone)}
                      >
                        <Icon name="Copy" size={16} />
                      </Button>
                    </div>
                    {lead.notes && (
                      <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm">{lead.notes}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
