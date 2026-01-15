import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface FooterProps {
  formData: { name: string; phone: string };
  setFormData: (data: { name: string; phone: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Footer = ({ formData, setFormData, handleSubmit }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Получите консультацию</h3>
              <p className="text-gray-300">Оставьте контакты и мы перезвоним в течение 15 минут</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12 bg-white/90 backdrop-blur"
              />
              <Input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-12 bg-white/90 backdrop-blur"
              />
              <Button type="submit" className="h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg px-8 whitespace-nowrap">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить
              </Button>
            </form>
            <p className="text-xs text-gray-300 text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
            </p>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Waves" className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold">FRANMER</h3>
              <p className="text-sm text-gray-400">композитные бассейны</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">© 2024 FRANMER. Все права защищены.</p>
            <p className="text-xs text-gray-500 mt-1">Более 20 лет создаём бассейны мечты</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
