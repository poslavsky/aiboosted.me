import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProblemsSection from "../components/ProblemsSection";
import ProgramVideoSection from "../components/ProgramVideoSection";
import ProgramSection from "../components/ProgramSection";
import InstructorSection from "../components/InstructorSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import CalculatorSection from "../components/CalculatorSection";

export default function Home() {
    const [showPurchaseModal, setShowPurchaseModal] = useState(false);

    const handleGetStarted = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleGetCourse = () => {
        setShowPurchaseModal(true);
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="fixed bottom-4 right-4 z-50">
                <ThemeToggle />
            </div>

            <Header onGetStarted={handleGetStarted} />

            <main className="pt-16">
                <Hero onGetStarted={handleGetStarted} />
                <ProblemsSection />
                <ProgramVideoSection />
                <ProgramSection />
                <CalculatorSection />
                <InstructorSection />
                <TestimonialsSection />
                <PricingSection onGetCourse={handleGetCourse} />
                <ContactForm />
            </main>

            <Footer />

            {showPurchaseModal && (
                <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-card rounded-lg p-8 max-w-md w-full shadow-xl border">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                            Готовы начать?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Курс «AIBoosted» поможет вам создать персонального AI-тренера шаг за шагом.
                            Вы получите доступ ко всем материалам сразу после оплаты.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowPurchaseModal(false)}
                                className="flex-1 px-4 py-2 text-muted-foreground border border-border rounded-md hover-elevate transition-all"
                            >
                                Закрыть
                            </button>
                            <button
                                onClick={() => {
                                    setShowPurchaseModal(false);
                                    window.open("https://aiboosted.lemonsqueezy.com/checkout/buy/6420c1e6-dea3-4fe8-b92b-3244da10667a?discount=0", "_blank");
                                }}
                                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover-elevate transition-all"
                            >
                                Купить за €45
                            </button>
                        </div>
                        <p className="mt-6 text-center text-sm text-muted-foreground">
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
                    </div>
                </div>
            )}
        </div>
    );
}
