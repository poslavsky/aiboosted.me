import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const visionMessages = [
    {
        category: "Подготовка к поступлению",
        text: "Готовилась к поступлению за границу, но жутко боялась разговорных интервью. За неделю с AI-тьютором проработала все вопросы и сложные ситуации. Результат — поступила в университет мечты!",
        badgeVariant: "default" as const,
    },
    {
        category: "Карьерный рост",
        text: "Хочу перейти в международную компанию. Теперь практикуюсь по 15-20 минут в день по дороге в офис, обсуждая с AI рабочие задачи. Эффективность взлетела, а времени на это уходит минимум",
        badgeVariant: "secondary" as const,
    },
    {
        category: "Преодоление барьера",
        text: "Я — классический случай \"все понимаю, а сказать боюсь\". Идея говорить с AI, которому все равно на твои ошибки, гениальна. Уже на второй день впервые в жизни говорила 20 минут без остановки! Это чувство свободы!",
        badgeVariant: "default" as const,
    },
    {
        category: "Гибкий график",
        text: "Из-за графика пришлось отказаться от репетитора. Попробовал настроить ChatGPT просто ради интереса — оказалось он вполне заменяет практику с нейтивом. Сейчас не понимаю, зачем столько переплачивал раньше",
        badgeVariant: "secondary" as const,
    },
    {
        category: "От теории к практике",
        text: "Год учил язык в Duolingo, но разговоры всё равно оставались мучением. Спринт реально удивил: говорю с AI-бадди, как с человеком, и чувствую, что наконец-то пошла нормальная речь",
        badgeVariant: "default" as const,
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-16 lg:py-24 bg-muted/30" id="testimonials">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Истории успеха с AI-тьюторами
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visionMessages.map((message, index) => (
                        <Card
                            key={index}
                            className="hover-elevate transition-all duration-300"
                        >
                            <CardContent className="p-6 h-full flex flex-col">
                                <div className="flex flex-col gap-4 flex-1">
                                    <Badge variant={message.badgeVariant} className="w-fit">
                                        {message.category}
                                    </Badge>
                                    <Quote className="w-6 h-6 text-primary/20" aria-hidden="true" />
                                    <p className="text-foreground/90 leading-relaxed text-base">
                                        {message.text}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
