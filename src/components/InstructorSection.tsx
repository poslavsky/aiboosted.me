import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Bot, Sparkles, Briefcase, Award } from "lucide-react";
import mikhailImageUrl from "../assets/mike_1759247549907.png";
import chatgptImageUrl from "../assets/chatgpt_1759247549906.png";
import geminiImageUrl from "../assets/gemini_1759247549906.png";

const achievements = [
    {
        icon: Bot,
        text: "Автор GPTs для практики языков",
        metric: "1000+ разговоров"
    },
    {
        icon: Briefcase,
        text: "Founder MigratePro — платформа для помощи профессионалам",
        metric: "200+ участников"
    },
    {
        icon: Award,
        text: "Интегрировал работу с AI в обучающие модули и разработал AI процессы для MVP в стартапе AI Career Copilot"
    }
];

export default function InstructorSection() {
    return (
        <section className="py-16 lg:py-24 bg-muted/30" id="instructor">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Про команду
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <Card className="lg:col-span-2 hover-elevate transition-all duration-300">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0 text-center md:text-left">
                                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-background shadow-lg mx-auto md:mx-0">
                                        <AvatarImage src={mikhailImageUrl} alt="Mikhail Paslauski" />
                                        <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">MP</AvatarFallback>
                                    </Avatar>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        Mikhail Paslauski
                                    </h3>
                                    <Badge variant="secondary" className="mb-4">Organic Intelligence</Badge>
                                    <div className="flex gap-2 justify-center md:justify-start">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="gap-1"
                                            asChild
                                        >
                                            <a href="https://www.linkedin.com/in/mikhail-paslauski/" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-3 h-3" />
                                                LinkedIn
                                            </a>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="gap-1"
                                            asChild
                                        >
                                            <a href="https://t.me/Pslvsk" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-3 h-3" />
                                                Telegram
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-foreground mb-6">Чуть больше про кожаного:</h4>
                                    <div className="space-y-4">
                                        {achievements.map((achievement, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                                    <achievement.icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-foreground/90 leading-relaxed">
                                                        {achievement.text}
                                                    </p>
                                                    {achievement.metric && (
                                                        <Badge variant="outline" className="mt-2">
                                                            <CheckCircle className="w-3 h-3 mr-1" />
                                                            {achievement.metric}
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="lg:col-span-1 space-y-6">
                        <Card className="hover-elevate transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-16 h-16 ring-2 ring-primary/20 shadow-md">
                                        <AvatarImage src={chatgptImageUrl} alt="ChatGPT 5" />
                                        <AvatarFallback className="bg-primary/10 text-primary">
                                            <Bot className="w-8 h-8" />
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">ChatGPT 5</h4>
                                        <Badge variant="outline" className="text-xs">AI Copilot</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover-elevate transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-16 h-16 ring-2 ring-primary/20 shadow-md">
                                        <AvatarImage src={geminiImageUrl} alt="Gemini 2.5 Pro" />
                                        <AvatarFallback className="bg-primary/10 text-primary">
                                            <Sparkles className="w-8 h-8" />
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Gemini 2.5 Pro</h4>
                                        <Badge variant="outline" className="text-xs">AI Copilot</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                    <CardContent className="p-8">
                        <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-primary" />
                            Почему сейчас?
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    ChatGPT уже у всех под рукой, но 90% используют его как «справочник».
                                    Те, кто научится использовать его глубже — получают <span className="font-semibold text-foreground">10Х результат</span>.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    OpenAI — самый быстрорастущий стартап, и возможности для обучения,
                                    карьеры и повседневной жизни будут только расширяться.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground leading-relaxed">
                                    Через 3–5 месяцев такие навыки станут must-have для учёбы и карьеры.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
