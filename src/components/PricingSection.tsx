import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface PricingSectionProps {
    onGetCourse?: () => void;
}

interface FeatureItem {
    bold: string;
    text: string;
}

interface Bonus {
    title: string;
    text: string;
}

interface PricingCardProps {
    title: string;
    description: string;
    price: string;
    priceSubtext: string;
    features: FeatureItem[];
    buttonText: string;
    buttonLink: string;
    oldPrice?: string;
    isPrimary?: boolean;
    isVip?: boolean;
    bonus?: Bonus;
}

const PricingCard = ({
    title,
    description,
    price,
    oldPrice,
    priceSubtext,
    features,
    buttonText,
    buttonLink,
    isPrimary,
    isVip,
    bonus,
}: PricingCardProps) => {
    return (
        <Card
            className={[
                "flex h-full flex-col rounded-[24px] border bg-card p-8 transition-all duration-300",
                isPrimary
                    ? "border-primary/50 shadow-[0_30px_80px_rgba(67,56,202,0.15)]"
                    : "border-border shadow-[0_20px_60px_rgba(15,23,42,0.05)]",
            ].join(" ")}
        >
            <CardHeader className="space-y-3 px-0 pb-6 text-left">
                <CardTitle className="text-2xl font-bold text-foreground">
                    {title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col px-0">
                <div
                    className={[
                        "mb-8 rounded-2xl border p-5 text-center",
                        isPrimary ? "border-primary/30 bg-primary/5" : "border-border bg-muted/30",
                    ].join(" ")}
                >
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-5xl font-extrabold text-primary">{price}</span>
                        {oldPrice && (
                            <div className="text-left">
                                <div className="text-lg font-medium text-muted-foreground line-through">
                                    {oldPrice}
                                </div>
                                <div className="text-sm font-semibold text-destructive">-36% скидка</div>
                            </div>
                        )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{priceSubtext}</p>
                </div>

                <ul className="mb-6 flex-1 space-y-3">
                    {features.map((feature, index) => (
                        <li
                            key={`${title}-feature-${index}`}
                            className="relative pl-7 text-base text-foreground/90"
                        >
                            <span
                                className={[
                                    "absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold",
                                    isVip ? "bg-indigo-100 text-indigo-600" : "bg-primary/10 text-primary",
                                ].join(" ")}
                            >
                                {isVip ? "◆" : "✓"}
                            </span>
                            <strong>{feature.bold}</strong> {feature.text}
                        </li>
                    ))}
                </ul>

                {bonus && (
                    <div className="mb-6 rounded-2xl border border-dashed border-primary/50 bg-primary/5 p-4 text-sm">
                        <p className="font-semibold text-primary">{bonus.title}</p>
                        <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: bonus.text }} />
                    </div>
                )}

                <Button
                    size="lg"
                    className={[
                        "mt-auto h-auto w-full rounded-2xl py-4 text-base font-semibold",
                        isPrimary
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "border-2 border-foreground/30 bg-transparent text-foreground hover:bg-foreground hover:text-background",
                    ].join(" ")}
                    asChild
                >
                    <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                        {buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>

                <p className="mt-4 text-center text-sm text-muted-foreground">
                    Не получается оплатить?{" "}
                    <a
                        href="https://t.me/Pslvsk"
                        className="text-primary font-medium hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Напишите в Telegram
                    </a>
                </p>
            </CardContent>
        </Card>
    );
};

export default function PricingSection({ onGetCourse }: PricingSectionProps) {
    const cards: PricingCardProps[] = [
        {
            title: "Практикум «AIBoosted»",
            description: "Сделайте из ChatGPT вашего личного AI-тьютора и нейтив спикера.",
            price: "€45",
            oldPrice: "€65",
            priceSubtext: "~ Цена одного урока с репетитором",
            buttonText: "Получить доступ",
            buttonLink: "https://aiboosted.lemonsqueezy.com/checkout/buy/6420c1e6-dea3-4fe8-b92b-3244da10667a?discount=0",
            isPrimary: true,
            features: [
                { bold: "Гайд в Notion:", text: "" },
                { bold: "Библиотека промптов:", text: "Сценарии для Coach, Tutor и Role-plays" },
                { bold: "Закрытое комьюнити:", text: "Окружение и отчёты участников" },
                { bold: "Еженедельный Zoom Q&A:", text: "Разбор вопросов по системе" },
            ],
            bonus: {
                title: "🎁 Бонус: Личный созвон — поможем настроить",
                text: "<i>(осталось 9 из 10)</i>",
            },
        },
        {
            title: "Индивидуальная стратегия",
            description: "Индивидуальная помощь с настройкой профиля и адаптацией системы под вас.",
            price: "€99",
            priceSubtext: "Персональная настройка системы",
            buttonText: "Оставить заявку",
            buttonLink: "https://t.me/Pslvsk",
            isVip: true,
            features: [
                { bold: "Всё, что в тарифе «Практикум»", text: "" },
                { bold: "Личная Zoom-сессия (60 мин):", text: "Разбор ваших целей и барьеров" },
                { bold: "Создание AI-профиля:", text: "Поможем задизайнить вашего персонального AI-tutor" },
                { bold: "Совместный запуск:", text: "Первая сессия вместе, чтобы снять вопросы" },
            ],
        },
    ];

    return (
        <section
            className="py-16 lg:py-24 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_45%)]"
            id="pricing"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Выберите формат участия
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Инвестируйте в систему, которая останется с вами навсегда.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto lg:grid-cols-2">
                    {cards.map((card, index) => (
                        <PricingCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
