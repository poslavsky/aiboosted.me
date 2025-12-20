import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeaderProps {
    onGetStarted?: () => void;
}

export default function Header({ onGetStarted }: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" fill="#ff2e00" />
                            </svg>
                        </div>
                        <Link href="/">
                            <span className="text-[18px] font-bold italic tracking-[-0.5px] font-sans cursor-pointer text-black dark:text-white">
                                AIBOOSTED.ME
                            </span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/product-guide">
                            <span className="text-base font-semibold font-sans text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                Гайд по продуктам
                            </span>
                        </Link>
                        <a href="#problems" className="text-base font-semibold font-sans text-muted-foreground hover:text-foreground transition-colors">
                            Зачем это?
                        </a>
                        <a href="#pricing" className="text-base font-semibold font-sans text-muted-foreground hover:text-foreground transition-colors">
                            Тарифы
                        </a>
                        <Button size="sm" onClick={onGetStarted} className="font-sans font-semibold">
                            Начать обучение
                        </Button>
                    </nav>

                    <div className="md:hidden">
                        <Button size="sm" onClick={onGetStarted}>
                            Начать
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
