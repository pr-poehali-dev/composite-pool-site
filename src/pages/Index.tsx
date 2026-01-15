import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('catalog');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '' });
    setIsDialogOpen(false);
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <MainContent scrollToSection={scrollToSection} />
      <Footer formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Index;
