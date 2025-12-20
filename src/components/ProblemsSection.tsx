import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, DollarSign, Smartphone, TrendingDown } from "lucide-react";

const problems = [
    {
        icon: AlertCircle,
        title: "Годами учите язык, а барьер не уходит?",
        description: "В момент разговора впадаете в ступор, боясь сделать ошибку."
    },
    {
        icon: DollarSign,
        title: "Репетиторы — это дорого, долго и неудобно",
        description: "Найти «своего» преподавателя сложно, занятия стоят дорого, а в плотном графике на них просто нет времени."
    },
    {
        icon: Smartphone,
        title: "Приложения не помогают заговорить",
        description: "Duolingo и аналоги учат выполнять упражнения и запоминать слова, но не готовят к спонтанной, живой речи."
    },
    {
        icon: TrendingDown,
        title: "Чувствуете, что отстаете от трендов AI",
        description: "Все вокруг говорят про LLM, а вы не понимаете, как применить их для решения своих реальных задач, кроме как справочника \"расскажи про …\"."
    }
];

export default function ProblemsSection() {
    return (
        <section className="py-16 lg:py-24 bg-background" id="problems">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        Знакомо?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {problems.map((problem, index) => (
                        <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`problem-card-${index}`}>
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                                        <problem.icon className="w-6 h-6 text-destructive" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-3">
                                            {problem.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {problem.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Key Insight */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
                    <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-4">
                        Главная проблема в изучении языка — недостаток разговорной практики.
                    </blockquote>
                    <p className="text-lg text-muted-foreground">
                        Решать ее с помощью людей дорого и сложно.
                    </p>
                </div>

                {/* Solution Teaser */}
                <div className="mt-12 text-center">
                    <p className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
                        Этот практикум создан, чтобы вы самостоятельно собрали персонального AI-тренера
                    </p>
                    <p className="text-lg text-muted-foreground">
                        и начали практиковать язык в 10 раз больше и эффективнее, чем со средним репетитором.
                    </p>
                </div>
            </div>
        </section>
    );
}
