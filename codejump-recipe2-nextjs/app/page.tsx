import { Borel } from "next/font/google";
import Image from "next/image";
import Ingredients from "./components/IngredientList";
import Steps from "./components/StepList";

export default function Home() {
    return (
        <div>
            <div className="md:grid md:grid-cols-2 md:gap-8 px-8 py-16">
                <Image
                    src="/images/recipe.jpg"
                    alt="ひよこ豆とアボガドのタコス"
                    width={400}
                    height={500}
                    className="w-full h-auto mb-16 "
                />
                <div className="px-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            ひよこ豆とアボガドのタコス
                        </h1>
                        <p className="text-lg mb-8">
                            ひよこ豆とアボガドのタコスは、ヘルシーで美味しいメキシカン料理の一つです。ひよこ豆はタンパク質が豊富で、アボガドはクリーミーな食感と健康的な脂肪を提供します。トルティーヤにひよこ豆とアボガドをのせ、サルサやレタス、チーズなどのトッピングを加えることで、簡単に作ることができます。ベジタリアンやビーガンの方にもおすすめの一品です。
                        </p>
                    </div>

                    <Ingredients />

                    <Steps />
                </div>
            </div>
            <div className="px-48 ">
                <p className="text-xl text-center py-4 border border-gray-300 mb-32">
                    レシピ一覧を見る
                </p>
            </div>
            <footer className="text-center py-4">
                <nav>
                    <ul className="flex justify-center space-x-4 mb-8">
                        <li>
                            <a>Instagram</a>
                        </li>
                        <li>
                            <a>Twitter</a>
                        </li>
                        <li>
                            <a>Facebook</a>
                        </li>
                    </ul>
                </nav>

                <p>© 2021 Recipe Diary</p>
            </footer>
        </div>
    );
}
