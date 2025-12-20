import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function ContactForm() {
    return (
        <section className="py-16 lg:py-24 bg-background" id="contact">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Остались вопросы?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Напишите нам в Telegram, и мы с радостью ответим
                    </p>
                </div>

                <Card className="hover-elevate transition-all duration-300 max-w-md mx-auto">
                    <CardContent className="p-8 text-center">
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <MessageCircle className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    Свяжитесь с нами
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    Ответим на все ваши вопросы
                                </p>
                            </div>
                            <Button
                                size="lg"
                                className="w-full bg-gradient-to-r from-primary to-primary/80"
                                asChild
                            >
                                <a href="https://t.me/Pslvsk" target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Написать в Telegram
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
