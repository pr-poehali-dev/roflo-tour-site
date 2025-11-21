import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const newsData = [
  {
    id: 1,
    title: "Зимний Кубок ROFLOTOUR 2025",
    date: "15 января 2025",
    category: "Турнир",
    image: "https://cdn.poehali.dev/projects/b81ff476-ac0f-4775-aac6-0b1515d83347/files/d6c8dd71-cd6b-4201-b16c-8202960507f1.jpg",
    description: "Главный турнир сезона с призовым фондом 500 000 ₽. Регистрация команд открыта до 10 января.",
    prizePool: "500 000 ₽",
    teams: 32,
    status: "Регистрация открыта"
  },
  {
    id: 2,
    title: "Весенний Чемпионат",
    date: "1 марта 2025",
    category: "Анонс",
    image: "https://cdn.poehali.dev/projects/b81ff476-ac0f-4775-aac6-0b1515d83347/files/8120bd84-c315-42e4-918a-17975a34ff29.jpg",
    description: "Готовьтесь к крупнейшему турниру весны. Формат Swiss System, BO3 финалы.",
    prizePool: "750 000 ₽",
    teams: 64,
    status: "Скоро"
  },
  {
    id: 3,
    title: "Итоги Осеннего Турнира",
    date: "25 декабря 2024",
    category: "Результаты",
    image: "https://cdn.poehali.dev/projects/b81ff476-ac0f-4775-aac6-0b1515d83347/files/58541bda-bfcc-4b55-923f-5294546890db.jpg",
    description: "Команда FireStorm одержала победу в напряженном финале со счетом 3:2.",
    prizePool: "300 000 ₽",
    teams: 16,
    status: "Завершен"
  }
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Новости Турниров
          </h1>
          <p className="text-xl text-muted-foreground">
            Актуальная информация о турнирах ROFLOTOUR по Counter Strike 2
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news, index) => (
            <Card 
              key={news.id} 
              className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-muted animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-semibold">
                    {news.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Icon name="Calendar" size={16} />
                  <span>{news.date}</span>
                </div>
                <CardTitle className="text-2xl font-heading">{news.title}</CardTitle>
                <CardDescription className="text-base">{news.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Trophy" size={18} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Призовой фонд</p>
                      <p className="font-semibold text-primary">{news.prizePool}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={18} className="text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Команд</p>
                      <p className="font-semibold text-secondary">{news.teams}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-muted">
                  <Badge 
                    variant={news.status === "Регистрация открыта" ? "default" : "secondary"}
                    className="w-full justify-center py-2 font-semibold"
                  >
                    {news.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
            <CardContent className="py-8">
              <Icon name="Bell" size={48} className="mx-auto mb-4 text-primary animate-glow" />
              <h3 className="text-2xl font-heading font-bold mb-2">Следите за обновлениями</h3>
              <p className="text-muted-foreground mb-4">
                Новые турниры анонсируются каждую неделю
              </p>
              <Badge className="text-lg px-6 py-2">
                <Icon name="Calendar" size={20} className="mr-2" />
                Ближайший турнир: 15 января
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default News;
