import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-muted sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Trophy" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ROFLOTOUR
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/news" className="text-foreground hover:text-primary transition-colors font-medium">
                Новости
              </Link>
              <Link to="/registration" className="text-foreground hover:text-primary transition-colors font-medium">
                Регистрация
              </Link>
              <Link to="/socials" className="text-foreground hover:text-primary transition-colors font-medium">
                Соцсети
              </Link>
              <Link to="/other" className="text-foreground hover:text-primary transition-colors font-medium">
                Прочее
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-base px-4 py-2 bg-gradient-to-r from-primary to-accent">
              <Icon name="Flame" size={16} className="mr-2" />
              Киберспортивная платформа №1
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              ROFLOTOUR
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональные турниры по Counter Strike 2 с крупными призовыми фондами
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/registration">
                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  <Icon name="UserPlus" size={24} className="mr-2" />
                  Зарегистрироваться
                </Button>
              </Link>
              <Link to="/news">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/50 hover:bg-primary/10">
                  <Icon name="Newspaper" size={24} className="mr-2" />
                  Текущие турниры
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">500K+</div>
                  <p className="text-sm text-muted-foreground">Призовой фонд</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-secondary/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-heading font-bold text-secondary mb-2">1000+</div>
                  <p className="text-sm text-muted-foreground">Игроков</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-accent/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Турниров</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Почему <span className="text-primary">ROFLOTOUR</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы создаем лучшие условия для киберспортсменов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "Shield",
                title: "Честная игра",
                description: "Строгий античит и мониторинг матчей",
                color: "secondary"
              },
              {
                icon: "Zap",
                title: "Быстрые выплаты",
                description: "Призовые в течение 14 дней",
                color: "accent"
              },
              {
                icon: "Users",
                title: "Сообщество",
                description: "100+ активных участников",
                color: "primary"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-muted/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${feature.color} to-accent flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-primary/30 animate-fade-in">
            <CardContent className="py-12 text-center">
              <Icon name="Calendar" size={64} className="mx-auto mb-6 text-primary animate-glow" />
              <h2 className="text-4xl font-heading font-bold mb-4">
                Ближайший турнир
              </h2>
              <p className="text-2xl text-muted-foreground mb-2">
                Зимний Кубок ROFLOTOUR 2025
              </p>
              <Badge className="text-lg px-6 py-2 mb-8">
                Старт: 15 января 2025
              </Badge>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/registration">
                  <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 w-full sm:w-auto">
                    <Icon name="UserPlus" size={24} className="mr-2" />
                    Зарегистрировать команду
                  </Button>
                </Link>
                <Link to="/news">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/50 hover:bg-primary/10 w-full sm:w-auto">
                    <Icon name="Info" size={24} className="mr-2" />
                    Подробнее
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-muted py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Trophy" size={24} className="text-white" />
              </div>
              <span className="text-xl font-heading font-bold">ROFLOTOUR</span>
            </div>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="MessageCircle" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Send" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Mail" size={24} />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ROFLOTOUR. Все права защищены.</p>
            <p className="mt-1">Профессиональные турниры по Counter Strike 2</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;