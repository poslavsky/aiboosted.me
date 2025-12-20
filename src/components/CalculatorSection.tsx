import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tutorSessionOptions = [1, 2, 3];
const tutorDurationOptions = [45, 60, 90];
const aiDurationOptions = [20, 30, 45];

const WEEKS_PER_YEAR = 52;

const formatCurrency = (value: number) =>
    new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
    }).format(value);

const formatHours = (value: number) =>
    `${Math.round(value).toLocaleString("ru-RU")} ч`;

interface ToggleGroupProps {
    label: string;
    value: number;
    options: number[];
    onChange: (value: number) => void;
    suffix?: string;
}

function ToggleGroup({
    label,
    value,
    options,
    onChange,
    suffix = "",
}: ToggleGroupProps) {
    return (
        <div className="space-y-3">
            <div className="text-sm font-medium text-foreground/80">{label}</div>
            <div className="grid grid-cols-3 gap-3">
                {options.map((option) => {
                    const isActive = option === value;
                    return (
                        <Button
                            key={option}
                            type="button"
                            variant={isActive ? "default" : "outline"}
                            className={cn(
                                "h-11 rounded-2xl text-sm font-semibold transition-all",
                                isActive
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                                    : "bg-background/70 text-foreground/80 hover:bg-background"
                            )}
                            onClick={() => onChange(option)}
                        >
                            {option} {suffix}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

interface SliderGroupProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    suffix?: string;
    onChange: (value: number) => void;
}

function SliderGroup({
    label,
    value,
    min,
    max,
    step = 1,
    suffix = "",
    onChange,
}: SliderGroupProps) {
    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between text-sm font-medium text-foreground/80">
                <span>{label}</span>
                <span className="text-primary font-semibold">
                    {value} {suffix}
                </span>
            </div>
            <Slider
                min={min}
                max={max}
                step={step}
                value={[value]}
                onValueChange={([val]) => onChange(val)}
            />
        </div>
    );
}

export default function CalculatorSection() {
    const [hourlyRate, setHourlyRate] = useState(25);
    const [tutorSessionsPerWeek, setTutorSessionsPerWeek] = useState(2);
    const [tutorDuration, setTutorDuration] = useState(60);
    const [aiSessionsPerWeek, setAiSessionsPerWeek] = useState(5);
    const [aiDuration, setAiDuration] = useState(30);

    const tutorHoursPerYear = useMemo(
        () => (tutorDuration / 60) * tutorSessionsPerWeek * WEEKS_PER_YEAR,
        [tutorDuration, tutorSessionsPerWeek]
    );
    const aiHoursPerYear = useMemo(
        () => (aiDuration / 60) * aiSessionsPerWeek * WEEKS_PER_YEAR,
        [aiDuration, aiSessionsPerWeek]
    );

    const tutorCostPerYear = useMemo(
        () => Math.round(tutorHoursPerYear * hourlyRate),
        [tutorHoursPerYear, hourlyRate]
    );

    const savings = tutorCostPerYear;
    const monthlySavings = Math.round(savings / 12);

    return (
        <section
            id="calculator"
            className="py-16 sm:py-24 bg-gradient-to-b from-primary/10 via-primary/5 to-background"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-1">
                        Интерктивный калькулятор
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                        Посчитайте свою выгоду
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Подберите параметры занятий и увидите, сколько переплачиваете за
                        репетитора и сколько часов практики возвращает AI-тьютор.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="bg-card/95 backdrop-blur border border-border/60 shadow-[0_15px_60px_rgba(40,67,146,0.15)] rounded-3xl p-6 sm:p-8 space-y-8">
                        <h3 className="text-xl font-semibold text-foreground">
                            Твоя ситуация
                        </h3>

                        <SliderGroup
                            label="Цена часа с репетитором"
                            value={hourlyRate}
                            min={10}
                            max={60}
                            suffix="€"
                            onChange={setHourlyRate}
                        />

                        <ToggleGroup
                            label="Занятий в неделю с репетитором"
                            value={tutorSessionsPerWeek}
                            options={tutorSessionOptions}
                            onChange={setTutorSessionsPerWeek}
                            suffix="раза"
                        />

                        <ToggleGroup
                            label="Длительность занятия"
                            value={tutorDuration}
                            options={tutorDurationOptions}
                            onChange={setTutorDuration}
                            suffix="мин"
                        />

                        <SliderGroup
                            label="Занятий в неделю с AI"
                            value={aiSessionsPerWeek}
                            min={1}
                            max={7}
                            onChange={setAiSessionsPerWeek}
                            suffix="раз"
                        />

                        <ToggleGroup
                            label="Длительность занятия с AI"
                            value={aiDuration}
                            options={aiDurationOptions}
                            onChange={setAiDuration}
                            suffix="мин"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-card/95 border border-border/60 rounded-3xl p-6 sm:p-8 text-center shadow-[0_10px_45px_rgba(40,67,146,0.15)]">
                            <div className="text-4xl mb-2">🔥</div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                Ты переплачиваешь
                            </p>
                            <p className="text-4xl sm:text-5xl font-extrabold text-primary mt-2">
                                {formatCurrency(savings)}
                            </p>
                            <p className="text-muted-foreground mt-2">
                                в год за меньшее количество практики
                            </p>
                            <p className="text-2xl font-semibold text-primary mt-4">
                                ≈ {formatCurrency(monthlySavings)} в месяц
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-red-200 bg-white/90 shadow-inner p-5 space-y-3">
                                <div className="flex items-center gap-2 font-semibold text-lg">
                                    <span>🚌</span> Репетитор
                                </div>
                                <div className="text-sm text-muted-foreground">В год</div>
                                <p className="text-2xl font-bold text-red-500">
                                    {formatCurrency(tutorCostPerYear)}
                                </p>
                                <div className="text-sm text-muted-foreground">Часов практики</div>
                                <p className="text-2xl font-bold text-foreground">
                                    {formatHours(tutorHoursPerYear)}
                                </p>
                            </div>

                            <div className="rounded-3xl border border-green-200 bg-white/90 shadow-inner p-5 space-y-3">
                                <div className="flex items-center gap-2 font-semibold text-lg">
                                    <span>⚡️</span> AI-tutor
                                </div>
                                <div className="text-sm text-muted-foreground">В год</div>
                                <p className="text-2xl font-bold text-green-500">0 €</p>
                                <div className="text-sm text-muted-foreground">Часов практики</div>
                                <p className="text-2xl font-bold text-foreground">
                                    {formatHours(aiHoursPerYear)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
