import { Card, CardContent } from "@/components/ui/card";

export default function ProgramVideoSection() {
    return (
        <section className="py-16 lg:py-24 bg-muted/30" id="program-video">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Программа практикума
                    </h2>
                </div>

                <Card className="overflow-hidden hover-elevate transition-all duration-300">
                    <CardContent className="p-0">
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                            <iframe
                                src="https://www.loom.com/embed/5d8491a11fb84034be7d495bde482a41?sid=5f354b61-d41b-4489-844c-e7951376dbab"
                                className="absolute top-0 left-0 w-full h-full"
                                allowFullScreen
                                title="Программа практикума AIBoosted"
                                data-testid="video-program"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
