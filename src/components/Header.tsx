import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  formData: { name: string; phone: string };
  setFormData: (data: { name: string; phone: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Header = ({
  activeSection,
  scrollToSection,
  isDialogOpen,
  setIsDialogOpen,
  formData,
  setFormData,
  handleSubmit
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://franmer-krasnodar.ru/assets/elements/templates/images/logo_color.svg" 
            alt="FRANMER" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex gap-6">
          {[
            { id: 'catalog', label: 'Каталог', icon: 'Grid3x3' },
            { id: 'gallery', label: 'Галерея', icon: 'Images' },
            { id: 'technology', label: 'Технология', icon: 'Settings' },
            { id: 'contacts', label: 'Контакты', icon: 'Phone' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 ${
                activeSection === item.id ? 'bg-gradient-to-r from-primary/20 to-secondary/20' : ''
              }`}
            >
              <Icon name={item.icon as any} size={18} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:88002005035" className="hidden lg:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
            <Icon name="Phone" size={18} />
            8 800 200 50 35
          </a>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg">
                <Icon name="Send" className="mr-2" size={18} />
                Оставить заявку
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Оставить заявку
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <Button type="submit" className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;