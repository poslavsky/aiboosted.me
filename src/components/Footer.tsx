import { ExternalLink, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-7 h-7 bg-black rounded-sm flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" fill="#ff2e00" />
                                </svg>
                            </div>
                            <span className="text-[14px] font-bold italic tracking-[-0.3px] font-sans text-black dark:text-white">
                                AIBOOSTED.ME
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Лучший подход для практики языков с помощью AI.
                            Создайте своего персонального тренера шаг за шагом.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold font-mono text-foreground uppercase tracking-wider text-xs">Быстрые ссылки</h3>
                        <nav className="space-y-2">
                            <a href="#problems" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Проблемы
                            </a>
                            <a href="#program" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Программа
                            </a>
                            <a href="#instructor" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                О команде
                            </a>
                            <a href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Цены
                            </a>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold font-mono text-foreground uppercase tracking-wider text-xs">Контакты</h3>
                        <div className="space-y-3">
                            <a
                                href="https://www.linkedin.com/in/mikhail-paslauski/"
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="w-4 h-4" />
                                LinkedIn
                            </a>
                            <a
                                href="https://t.me/Pslvsk"
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Telegram
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © 2025 AIBoosted.me. Все права защищены.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                Политика конфиденциальности
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                Условия использования
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
