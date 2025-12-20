import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "wouter";
import heroBackgroundUrl from "../assets/generated_images/AI_language_learning_hero_background_d4d869f6.png";

interface HeroProps {
    onGetStarted?: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBackgroundUrl})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Лучший подход для практики иностранного языка в 2025
                    </h1>

                    <div className="text-xl sm:text-2xl text-white/90 mb-4 font-medium">
                        ⇒ экономия €100–400 в месяц на репетиторе
                    </div>

                    <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Практикум: шаг за шагом соберёте AI-тьютора в ChatGPT. Чтобы практиковаться x5-10 больше, на темы которые вам интересны, без стресса и почти бесплатно.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <Button
                            size="lg"
                            onClick={onGetStarted}
                            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
                            data-testid="button-hero-get-started"
                        >
                            Получить доступ €45
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        <Link href="/product-guide">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 h-auto"
                                data-testid="button-hero-watch-demo"
                            >
                                <Play className="mr-2 h-5 w-5" />
                                Посмотреть демо
                            </Button>
                        </Link>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white/90">
                        <div className="text-center" data-testid="stat-time">
                            <div className="text-3xl font-bold font-sans">1 вечер</div>
                            <div className="text-xs font-mono uppercase tracking-[0.15em] opacity-80">На настройку</div>
                        </div>
                        <div className="text-center" data-testid="stat-savings">
                            <div className="text-3xl font-bold font-sans">€200+</div>
                            <div className="text-xs font-mono uppercase tracking-[0.15em] opacity-80">Экономия в месяц</div>
                        </div>
                        <div className="text-center" data-testid="stat-practice">
                            <div className="text-3xl font-bold font-sans">x10</div>
                            <div className="text-xs font-mono uppercase tracking-[0.15em] opacity-80">Больше практики</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}
