import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Other = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Прочее
          </h1>
          <p className="text-xl text-muted-foreground">
            Дополнительная информация о ROFLOTOUR
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Info" size={28} className="text-primary" />
                  <CardTitle className="text-2xl font-heading">О платформе</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  ROFLOTOUR — это профессиональная платформа для организации турниров по Counter Strike 2.
                </p>
                <p className="text-muted-foreground">
                  Мы создаем честные и захватывающие соревнования для игроков всех уровней.
                </p>
                <div className="flex gap-2 pt-4">
                  <Badge className="text-sm">С 2024</Badge>
                  <Badge className="text-sm">1000+ игроков</Badge>
                  <Badge className="text-sm">50+ турниров</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:shadow-lg hover:shadow-secondary/10 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Target" size={28} className="text-secondary" />
                  <CardTitle className="text-2xl font-heading">Наша миссия</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Развитие киберспортивного сообщества CS2 и создание возможностей для талантливых игроков.
                </p>
                <p className="text-muted-foreground">
                  Мы верим, что каждая команда заслуживает шанс проявить себя на большой сцене.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="HelpCircle" size={28} className="text-accent" />
                <CardTitle className="text-3xl font-heading">Часто задаваемые вопросы</CardTitle>
              </div>
              <CardDescription className="text-base">
                Ответы на популярные вопросы участников
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Как зарегистрировать команду?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Перейдите на страницу "Регистрация", заполните форму с данными команды и капитана. 
                    После отправки заявки мы свяжемся с вами в течение 24 часов для подтверждения участия.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Какие требования к участникам?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Минимальный возраст — 16 лет. Требуется Steam аккаунт с CS2 и уровнем не ниже 10. 
                    Запрещены VAC баны. В команде минимум 5 игроков + рекомендуется 1 запасной.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Какой формат турниров?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Мы используем различные форматы: Swiss System для групповых этапов, Single/Double Elimination 
                    для плей-офф. Матчи проходят в формате BO1, BO3 или BO5 в зависимости от этапа турнира.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Как выплачивается призовой фонд?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Призовые выплачиваются в течение 14 дней после завершения турнира на указанные реквизиты. 
                    Поддерживаем переводы на банковские карты, электронные кошельки и криптовалюту.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Где проходят матчи?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Все матчи проходят онлайн на наших выделенных серверах с защитой от читов. 
                    IP-адреса серверов выдаются капитанам команд перед началом матча в Discord.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Можно ли заменить игрока во время турнира?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Да, замены разрешены до начала плей-офф стадии. Новый игрок должен соответствовать 
                    всем требованиям турнира. Заявку на замену нужно подать минимум за 24 часа до следующего матча.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-primary/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="py-8">
              <div className="text-center space-y-6">
                <Icon name="MessageCircle" size={48} className="mx-auto text-primary animate-glow" />
                <div>
                  <h3 className="text-3xl font-heading font-bold mb-3">Остались вопросы?</h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Свяжитесь с нами любым удобным способом
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 h-12 px-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram
                  </Button>
                  <Button className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 h-12 px-6">
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Discord
                  </Button>
                  <Button className="bg-gradient-to-r from-accent to-primary hover:opacity-90 h-12 px-6">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Email
                  </Button>
                </div>

                <div className="pt-6 border-t border-muted">
                  <p className="text-sm text-muted-foreground">
                    Поддержка работает 24/7 • Среднее время ответа: 15 минут
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <Icon name="Shield" size={40} className="mx-auto mb-4 text-primary" />
                <h4 className="font-heading font-bold text-xl mb-2">Честная игра</h4>
                <p className="text-sm text-muted-foreground">
                  Строгий античит контроль и мониторинг всех матчей
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/20">
              <CardContent className="pt-6">
                <Icon name="Zap" size={40} className="mx-auto mb-4 text-secondary" />
                <h4 className="font-heading font-bold text-xl mb-2">Быстрые выплаты</h4>
                <p className="text-sm text-muted-foreground">
                  Призовые в течение 14 дней после финала
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-accent/20">
              <CardContent className="pt-6">
                <Icon name="Users" size={40} className="mx-auto mb-4 text-accent" />
                <h4 className="font-heading font-bold text-xl mb-2">Сообщество</h4>
                <p className="text-sm text-muted-foreground">
                  Активное комьюнити в Discord с 5000+ участников
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
