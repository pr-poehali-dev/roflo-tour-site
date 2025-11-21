import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    email: "",
    discord: "",
    players: "",
    experience: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎮",
      description: "Мы свяжемся с вами в течение 24 часов.",
    });
    setFormData({
      teamName: "",
      captainName: "",
      email: "",
      discord: "",
      players: "",
      experience: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Регистрация на Турнир
          </h1>
          <p className="text-xl text-muted-foreground">
            Присоединяйтесь к самым масштабным турнирам по CS2
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="FileText" size={28} className="text-primary" />
                  <CardTitle className="text-3xl font-heading">Инструкция</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Следуйте этим шагам для успешной регистрации
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Соберите команду",
                      description: "Минимум 5 игроков + 1 запасной (рекомендуется)",
                      icon: "Users"
                    },
                    {
                      step: "2",
                      title: "Заполните форму",
                      description: "Укажите данные команды и капитана справа",
                      icon: "ClipboardList"
                    },
                    {
                      step: "3",
                      title: "Подтвердите участие",
                      description: "Проверьте email для подтверждения регистрации",
                      icon: "Mail"
                    },
                    {
                      step: "4",
                      title: "Присоединяйтесь к Discord",
                      description: "Получите доступ к серверу турнира для координации",
                      icon: "MessageSquare"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon name={item.icon as any} size={18} className="text-primary" />
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Важная информация</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Все игроки должны быть старше 16 лет</li>
                          <li>• Требуется Steam аккаунт с CS2</li>
                          <li>• Минимальный уровень Steam: 10</li>
                          <li>• Запрещены VAC баны</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="border-secondary/20 sticky top-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="UserPlus" size={28} className="text-secondary" />
                  <CardTitle className="text-3xl font-heading">Форма регистрации</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Заполните все поля для участия в турнире
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="teamName" className="text-base flex items-center gap-2">
                      <Icon name="Shield" size={16} />
                      Название команды *
                    </Label>
                    <Input
                      id="teamName"
                      name="teamName"
                      placeholder="Team Legends"
                      value={formData.teamName}
                      onChange={handleChange}
                      required
                      className="bg-background border-muted"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="captainName" className="text-base flex items-center gap-2">
                      <Icon name="User" size={16} />
                      Имя капитана *
                    </Label>
                    <Input
                      id="captainName"
                      name="captainName"
                      placeholder="Иван Петров"
                      value={formData.captainName}
                      onChange={handleChange}
                      required
                      className="bg-background border-muted"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base flex items-center gap-2">
                      <Icon name="Mail" size={16} />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="captain@team.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-muted"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="discord" className="text-base flex items-center gap-2">
                      <Icon name="MessageSquare" size={16} />
                      Discord *
                    </Label>
                    <Input
                      id="discord"
                      name="discord"
                      placeholder="username#1234"
                      value={formData.discord}
                      onChange={handleChange}
                      required
                      className="bg-background border-muted"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="players" className="text-base flex items-center gap-2">
                      <Icon name="Users" size={16} />
                      Состав команды *
                    </Label>
                    <Textarea
                      id="players"
                      name="players"
                      placeholder="Укажите никнеймы всех игроков (минимум 5)"
                      value={formData.players}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-background border-muted resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-base flex items-center gap-2">
                      <Icon name="Award" size={16} />
                      Опыт команды
                    </Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      placeholder="Расскажите о достижениях команды (необязательно)"
                      value={formData.experience}
                      onChange={handleChange}
                      rows={3}
                      className="bg-background border-muted resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                    <Icon name="Lock" size={14} />
                    <span>Ваши данные защищены и не передаются третьим лицам</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 border-secondary/20">
            <CardContent className="py-8 text-center">
              <Icon name="Trophy" size={48} className="mx-auto mb-4 text-secondary animate-glow" />
              <h3 className="text-2xl font-heading font-bold mb-3">Призовой фонд: 500 000 ₽</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <Badge className="text-base px-4 py-2">
                  🥇 1 место: 250 000 ₽
                </Badge>
                <Badge className="text-base px-4 py-2">
                  🥈 2 место: 150 000 ₽
                </Badge>
                <Badge className="text-base px-4 py-2">
                  🥉 3 место: 100 000 ₽
                </Badge>
              </div>
              <p className="text-muted-foreground">
                Регистрация открыта до 10 января 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Registration;
