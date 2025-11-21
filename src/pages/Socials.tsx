import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const socialLinks = [
  {
    name: "Telegram",
    url: "https://t.me/xyqq01",
    icon: "Send",
    color: "from-[#0088cc] to-[#229ED9]",
    description: "Новости, анонсы и общение с участниками"
  },
  {
    name: "Discord",
    url: "https://discord.gg/2Bhmb5jK",
    icon: "MessageSquare",
    color: "from-[#5865F2] to-[#7289DA]",
    description: "Основной сервер для координации турниров"
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/xyqqqqqqq",
    icon: "Video",
    color: "from-[#9146FF] to-[#6441A5]",
    description: "Прямые трансляции турниров и матчей"
  }
];

const Socials = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Социальные сети
          </h1>
          <p className="text-xl text-muted-foreground">
            Присоединяйтесь к сообществу ROFLOTOUR
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {socialLinks.map((social, index) => (
            <Card
              key={social.name}
              className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border-muted animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon name={social.icon as any} size={40} className="text-white" />
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <h2 className="text-3xl font-heading font-bold mb-2">{social.name}</h2>
                    <p className="text-muted-foreground mb-4">{social.description}</p>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline break-all"
                    >
                      {social.url}
                    </a>
                  </div>

                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <Button 
                      size="lg" 
                      className={`h-14 px-8 bg-gradient-to-r ${social.color} hover:opacity-90 transition-opacity text-white font-semibold`}
                    >
                      Перейти
                      <Icon name="ExternalLink" size={20} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
            <CardContent className="py-8 text-center">
              <Icon name="Users" size={48} className="mx-auto mb-4 text-primary animate-glow" />
              <h3 className="text-2xl font-heading font-bold mb-3">Будьте в курсе событий</h3>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Подписывайтесь на наши социальные сети, чтобы не пропустить важные анонсы, 
                результаты матчей и прямые трансляции турниров
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:bg-primary/10"
                    >
                      <Icon name={social.icon as any} size={16} className="mr-2" />
                      {social.name}
                    </Button>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Socials;
