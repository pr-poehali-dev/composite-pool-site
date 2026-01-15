import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface MainContentProps {
  scrollToSection: (section: string) => void;
}

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
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Композитные бассейны FRANMER
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-semibold">
              Более 20 лет производим бассейны премиум-класса
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              Европейское качество • 35 лет гарантии • Установка за 3 дня
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-2xl text-lg px-8"
                onClick={() => scrollToSection('contacts')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8"
                onClick={() => scrollToSection('gallery')}
              >
                <Icon name="Images" className="mr-2" size={20} />
                Наши работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Почему выбирают FRANMER
            </h2>
            <p className="text-lg text-muted-foreground">Лидер рынка композитных бассейнов в Краснодарском крае</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: 'Trophy',
                title: '5000+ бассейнов',
                description: 'Установлено по Краснодарскому краю за 20 лет работы'
              },
              {
                icon: 'Grid3x3',
                title: '84 модели',
                description: 'Композитных бассейнов для любых потребностей и участков'
              },
              {
                icon: 'Waves',
                title: '14 демо-бассейнов',
                description: 'Действующих бассейнов для тест-драйва в брэнд-офисах'
              },
              {
                icon: 'Headphones',
                title: 'Сервис 24/7',
                description: 'Круглосуточная поддержка, ремонт, обслуживание, консервация'
              },
              {
                icon: 'Package',
                title: '500+ позиций',
                description: 'Оборудования и химии в наличии без ожидания'
              },
              {
                icon: 'Home',
                title: 'Работы «под ключ»',
                description: 'Полный цикл от котлована до кристально чистой воды'
              }
            ].map((item, index) => (
              <Card 
                key={item.title}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon name={item.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Гарантия 35 лет
                </h3>
                <p className="text-lg text-muted-foreground">
                  Официальная гарантия производителя на все композитные бассейны
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-4xl font-bold text-primary mb-2">7 слоёв</div>
                  <p className="text-sm text-muted-foreground">Армированный стекловолокном композит</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-primary mb-2">3 дня</div>
                  <p className="text-sm text-muted-foreground">Быстрый монтаж без долгого строительства</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-primary mb-2">50 км</div>
                  <p className="text-sm text-muted-foreground">Бесплатный выезд мобильного офиса</p>
                </div>
              </div>
            </Card>
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