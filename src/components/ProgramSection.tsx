import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Globe, BarChart3, CheckCircle } from "lucide-react";

const benefits = [
    {
        icon: CheckCircle,
        title: "От справочника к живому общению",
        description: "Раньше AI был для тебя просто словарём — \"спросить, получить примеры, перевести\". Теперь это ежедневная полноценная замена живому репетитору из italki, с экономией минимум €200 в месяц и постоянной доступностью."
    },
    {
        icon: BarChart3,
        title: "Твой персональный AI-тренер",
        description: "Ты получишь супер-персонализированного AI-тренера, который знает тебя, твои цели и интересы. Он сам инициирует ежедневную практику, у него свой характер — он больше не \"полезный помощник\"."
    },
    {
        icon: Globe,
        title: "Жизнь на новом языке",
        description: "Ты научишься не просто учить язык, а жить на нём: обсуждать любые темы, от личных переживаний до рабочих задач. Идеи и инсайты начнут появляться прямо во время общения с AI."
    },
    {
        icon: CheckCircle,
        title: "MUST-навык 2026",
        description: "Освоишь advanced возможности ChatGPT, которые помогут не только в языковом росте, но и в рабочих проектах, личных задачах и других сферах жизни."
    }
];

const formatDetails = [
    {
        icon: Calendar,
        label: "Старт",
        value: "Мгновенно",
        subtitle: "Доступ сразу после оплаты"
    },
    {
        icon: Clock,
        label: "Настройка",
        value: "1 вечер",
        subtitle: "Чтобы собрать базу"
    },
    {
        icon: Globe,
        label: "Изучаемый язык",
        value: "Любой",
        subtitle: "🇬🇧 / 🇵🇱 / 🌎"
    },
    {
        icon: BarChart3,
        label: "Уровень",
        value: "От B1 / Intermediate",
        subtitle: "«вроде говорю, но стрессую»"
    }
];

export default function ProgramSection() {
    return (
        <section className="py-16 lg:py-24 bg-muted/30" id="program">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        Что вы получите на практикуме
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="hover-elevate transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <benefit.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-3">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
                        Формат практикума
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {formatDetails.map((detail, index) => (
                            <Card key={index} className="text-center hover-elevate transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <detail.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-sm text-muted-foreground mb-2">{detail.label}</div>
                                    <div className="font-semibold text-foreground mb-1">{detail.value}</div>
                                    <div className="text-xs text-muted-foreground">{detail.subtitle}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
