import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface MainContentProps {
  scrollToSection: (section: string) => void;
}

const pools = [
  {
    name: 'ПОРТО',
    subtitle: 'САМЫЙ БОЛЬШОЙ КОМПОЗИТНЫЙ БАССЕЙН В РОССИИ',
    length: '14,1 м',
    width: '4,04 м',
    depth: '1,4 м',
    volume: '83 куб.',
    image: 'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/f4c319df-33d4-43ad-bc71-6ede678bce03.jpg'
  },
  {
    name: 'ОЛИМПИК',
    subtitle: 'КЛАССИЧЕСКАЯ ФОРМА',
    length: '12,9 м',
    width: '3,7 м',
    depth: '1,2 м',
    volume: '54 куб.',
    image: 'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/f4c319df-33d4-43ad-bc71-6ede678bce03.jpg'
  },
  {
    name: 'ДИЖОН',
    subtitle: 'КОМПАКТНАЯ МОДЕЛЬ',
    length: '10,03 м',
    width: '3,69 м',
    depth: '1,26 м',
    volume: '40 куб.',
    image: 'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/f4c319df-33d4-43ad-bc71-6ede678bce03.jpg'
  },
  {
    name: 'ПРЕМЬЕР-SPA',
    subtitle: 'С ЗОНОЙ ОТДЫХА',
    length: '12 м',
    width: '4,4 м',
    depth: '1,5 м',
    volume: '56 куб.',
    image: 'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/f4c319df-33d4-43ad-bc71-6ede678bce03.jpg'
  },
  {
    name: 'РИВЬЕРА',
    subtitle: 'С ГИДРОМАССАЖЕМ',
    length: '12 м',
    width: '4,4 м',
    depth: '1,55 м',
    volume: '56 куб.',
    image: 'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/f4c319df-33d4-43ad-bc71-6ede678bce03.jpg'
  },
  {
    name: 'КСАБИЯ',
    subtitle: 'ЭЛЕГАНТНЫЙ ДИЗАЙН',
    length: '10,82 м',
    width: '4,08 м',
    depth: '1,3 м',
    volume: '68 куб.',
    image: 'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/f4c319df-33d4-43ad-bc71-6ede678bce03.jpg'
  }
];

const gallery = [
  'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/03ae61dd-72d4-4fa7-9df9-cb1cfce108e4.jpg',
  'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/8a4a2325-f97b-4019-b0c0-80a6a8a0758f.jpg',
  'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/03ae61dd-72d4-4fa7-9df9-cb1cfce108e4.jpg',
  'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/8a4a2325-f97b-4019-b0c0-80a6a8a0758f.jpg',
  'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/03ae61dd-72d4-4fa7-9df9-cb1cfce108e4.jpg',
  'https://cdn.poehali.dev/projects/d2d753c4-847a-4ae3-876d-967bab59afbe/files/8a4a2325-f97b-4019-b0c0-80a6a8a0758f.jpg'
];

const MainContent = ({ scrollToSection }: MainContentProps) => {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Композитные бассейны премиум-класса
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Более 20 лет создаём бассейны мечты с гарантией качества и долговечности
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-2xl text-lg px-8"
                onClick={() => scrollToSection('catalog')}
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Смотреть каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8"
                onClick={() => scrollToSection('contacts')}
              >
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Каталог бассейнов
            </h2>
            <p className="text-lg text-muted-foreground">Выберите идеальную модель для вашего участка</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pools.map((pool, index) => (
              <Card 
                key={pool.name}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 h-48">
                  <img 
                    src={pool.image} 
                    alt={pool.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {index === 0 && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      ХИТ
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{pool.name}</h3>
                  <p className="text-xs text-accent font-semibold mb-4 uppercase tracking-wide">{pool.subtitle}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Длина:</span>
                      <span className="font-semibold">{pool.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Ширина:</span>
                      <span className="font-semibold">{pool.width}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Глубина:</span>
                      <span className="font-semibold">{pool.depth}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-sm text-muted-foreground">Объём:</span>
                      <span className="font-bold text-lg text-primary">{pool.volume}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg">
                    <Icon name="Calculator" className="mr-2" size={18} />
                    Рассчитать стоимость
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Галерея готовых работ
            </h2>
            <p className="text-lg text-muted-foreground">Более 500 успешно реализованных проектов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image} 
                  alt={`Проект ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-lg mb-1">Проект #{index + 1}</p>
                    <p className="text-sm text-gray-200">Краснодарский край</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Технология производства
            </h2>
            <p className="text-lg text-muted-foreground">Европейское качество и инновации</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Layers',
                title: '7 слоёв композита',
                description: 'Армированный стекловолокном композит обеспечивает максимальную прочность'
              },
              {
                icon: 'Shield',
                title: 'Гарантия 25 лет',
                description: 'Официальная гарантия производителя на все модели бассейнов'
              },
              {
                icon: 'Zap',
                title: 'Монтаж за 3 дня',
                description: 'Быстрая установка без долгого строительства и ожидания'
              },
              {
                icon: 'Droplet',
                title: 'Гелькоут покрытие',
                description: 'Гладкая поверхность, устойчивая к водорослям и загрязнениям'
              }
            ].map((item, index) => (
              <Card 
                key={item.title}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name={item.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Контакты
              </h2>
              <p className="text-lg text-muted-foreground">Свяжитесь с нами удобным способом</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 hover:shadow-xl transition-all animate-scale-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Телефон</h3>
                    <a href="tel:88002005035" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
                      8 800 200 50 35
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Бесплатный звонок по России</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Адрес</h3>
                    <p className="text-muted-foreground">г. Краснодар</p>
                    <p className="text-muted-foreground">ул. Примерная, д. 1</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a href="mailto:info@franmer-pools.ru" className="text-primary hover:text-secondary transition-colors">
                      info@franmer-pools.ru
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shrink-0">
                    <Icon name="Clock" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 16:00</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-center">Юридическая информация</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><strong>ООО "ФРАНМЕР"</strong></p>
                <p>ИНН: 2312345678</p>
                <p>ОГРН: 1122312345678</p>
                <p>КПП: 231201001</p>
                <p>Юридический адрес: 350000, г. Краснодар, ул. Красная, д. 1</p>
                <p className="pt-4 text-xs">
                  Все представленные на сайте материалы носят информационный характер и не являются публичной офертой.
                  Окончательная стоимость и характеристики уточняются при оформлении заказа.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
