type Step = {
    step: string;
};

const steps: Step[] = [
    {
        step: "ひよこ豆は水気を切り、アボカドは皮と種を取り除き、適当な大きさに切る。",
    },
    { step: "トルティーヤを温める。" },
    {
        step: "トルティーヤにレタス、ひよこ豆、アボカドをのせ、サルサソースとチーズをかける。",
    },
    { step: "トルティーヤを巻いて完成。" },
];

export default function StepList() {
    return (
        <div>
            <h2 className="w-auto text-2xl font-bold mb-4 border-b-2 border-gray-300">
                作り方
            </h2>
            <ol className="list-decimal list-outside mb-32 space-y-2 pl-4">
                {steps.map((step, index) => (
                    <li key={index}>{step.step}</li>
                ))}
            </ol>
        </div>
    );
}
