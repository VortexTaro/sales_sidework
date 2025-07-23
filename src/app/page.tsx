import Image from "next/image";
import React from "react"; // Added missing import for React

const HeroSection = () => (
  <section className="w-full bg-gray-900 text-white">
    <div className="container mx-auto flex flex-col items-center justify-center h-screen min-h-[800px] text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-yellow-400">
        セールス副業
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
        あなたのコミュ力、<br />
        時給5,000円以上で買い取ります。
      </h2>
      <p className="text-lg md:text-xl mb-6">
        【年収550万円以上の方、限定募集】<br />
        自宅で“平均時給5,000円、最高10,000円も可能”<br />
        アポ獲得・クライアント探し一切不要、ZOOMで商談するだけの副業に挑戦して見ませんか？
      </p>
      <a
        href="#entry"
        className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300 text-lg"
      >
        ▶︎ 【選考エントリーに進む（LINE登録）】
      </a>
      <p className="text-xs text-gray-400 mt-4 max-w-sm">
        ※ご応募いただいた方から順に、選考のご案内をお送りします。<br/>
        ※サポート枠には限りがあり、応募者多数のため、予告なく募集を締め切る場合がございます。
      </p>
    </div>
  </section>
);

const ProblemCard = ({ title, problems }: { title: string; problems: string[] }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-2">
      {problems.map((problem, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <span className="text-gray-600">{problem}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProblemsSection = () => {
  const problemsForSales = [
    "テレアポや調整業務ばかりで、肝心の商談経験が月に数回しか積めない。",
    "「いつになったらフィールドセールスに…」と、インサイドセールスでくすぶっている。",
    "5年先の、輝いていない上司の姿が、自分の未来に重なって見える。",
  ];
  const problemsForNonSales = [
    "人事・企画・マーケなど、高い問題解決力があるのに給与に反映されていない。",
    "営業に挑戦したいが、今さら未経験で転職するリスクは負えない。",
    "今の会社や職種に、キャリアの限界を感じ始めている。",
  ];
  const problemsForFuture = [
    "「いきなり独立はリスクが高い…」でも、会社に依存せず人脈を広げたい。",
    "副業でまず月20〜30万円を安定させ、リスクゼロで次の一歩を踏み出したい。",
    "会社の看板なしで、自分の本当の実力を試してみたい。",
  ];

  const problemTags = [
    "正社員の給料が頭打ち",
    "昇給スピードが遅い", "10年後も同じ業務？", "営業に挑戦したいが社内ポストがない",
    "部署異動は難関", "転職はリスク", "「副業NG」の社内規定",
    "副業がバレたらどうしよう", "独立は怖い"
  ];

  return (
    <section id="problems" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            こんなお悩み、ありませんか？
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {problemTags.map(tag => (
              <span key={tag} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-md border border-gray-200">
                # {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ProblemCard title="【現役営業・インサイドセールスの方へ】" problems={problemsForSales} />
          <ProblemCard title="【非営業職でも、ビジネスに自信のある方へ】" problems={problemsForNonSales} />
          <ProblemCard title="【将来の独立・キャリアアップを考える方へ】" problems={problemsForFuture} />
        </div>
      </div>
    </section>
  );
};

const InterludeSection = () => (
  <section className="py-12 bg-gray-800 text-white">
    <div className="container mx-auto px-4 text-center">
      <p className="text-2xl font-bold">今の会社は、安定という名の「麻薬」。</p>
      <p className="mt-2">そうとは分かっていても、なかなか抜け出せない。<br/>…もう、そんな現状を変えませんか？</p>
    </div>
  </section>
);

const ReasonCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center">
    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-gray-900 mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const ReasonsSection = () => (
  <section id="reasons" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          ”セールス副業”が選ばれる3つの理由
        </h2>
        <p className="text-gray-600 mt-2">
          なぜ、この副業が“選ばれたビジネスパーソン”に支持されるのか？<br/>
          私たちが圧倒的な成果を出せるには、3つの明確な理由があります。
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <ReasonCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>}
          title="理由１：【完全リモート & 身バレ防止スキーム】"
        >
          副業禁止の企業にお勤めの方もご安心ください。専門家指導のもと、報酬の受け取り方から確定申告まで、会社に知られずに副業を始められる手法を個別にレクチャーします。もちろん商談はPCとネット環境さえあれば自宅からでOKです。
        </ReasonCard>
        <ReasonCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.136a1.76 1.76 0 011.17-2.174l5.36-1.787a1.76 1.76 0 001.17-2.174l-2.147-6.136a1.76 1.76 0 013.417.592z" /></svg>}
          title="理由２：【アポ獲得不要。“おいしい商談”だけに集中】"
        >
          セールスで最も大変な「アポイント獲得」は、プロである本部がすべて代行。あなたはAIがマッチングした質の高いアポイント（1件50万円以上の高単価案件）に、ZOOMで参加するだけ。あなたの時間は、最も価値の高い「商談」にのみ 投下してください。
        </ReasonCard>
        <ReasonCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          title="理由３：【教育体制が充実。さらに上を目指せる】"
        >
          専任マネージャーがマンツーマンで伴走し、あなたのさらなる営業力向上を目指せます。トップセールスのトークをロープレで完全インストール。再現性の高い「トークスクリプト」も完備しています。すでに活躍しているトップセールスが何人もいて彼らのやり方を学ぶこともできます。
        </ReasonCard>
      </div>
    </div>
  </section>
);

const SimulationSection = () => (
  <section id="simulation" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">具体的な収入シミュレーション</h2>
      <p className="text-gray-600 mt-2 mb-10">「本当にそんなに稼げるの？」という疑問に、ロジックでお答えします。</p>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="md:col-span-2">
            <p className="font-bold text-gray-700">稼働:</p>
            <p className="text-gray-600">平日夜、1日1件（約2時間）のZOOM商談</p>
          </div>
          <div>
            <p className="font-bold text-gray-700">商談数:</p>
            <p className="text-gray-600">月20件（本部がアポイントを安定供給）</p>
          </div>
          <div>
            <p className="font-bold text-gray-700">平均成約率:</p>
            <p className="text-gray-600">30% (→ 6件の成約)</p>
          </div>
        </div>
        <hr className="my-6" />
        <div className="text-center">
          <p className="text-lg font-bold text-gray-700">あなたの月収目安:</p>
          <p className="text-4xl md:text-5xl font-extrabold text-yellow-500 mt-2">24<span className="text-2xl ml-1">万円</span></p>
          <p className="text-sm text-gray-500 mt-2">（例：単価50万円の案件で、成約額の8%が報酬の場合）</p>
          <p className="text-md text-gray-700 mt-6 font-semibold">このシミュレーションは、決して夢物語ではありません。</p>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">成果事例</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-gray-800">「副業のおかげで、実は会社の部長より稼いでます（笑）」</p>
          <p className="text-gray-600 mt-4">以前、人材紹介の副業に挑戦したものの、全く稼げず挫折。ここは質の高いアポが本当に供給されるので、セールス未経験の私でも結果が出せました。今では本業と合わせて年収1,000万円を超え 、会社に依存しない自信がつきました。</p>
          <p className="text-right mt-6 font-bold text-gray-700">– Kさん（31歳）/ 上場企業 人事担当<br/><span className="font-normal text-sm">（副業月収：50万円 / 月稼働：約80時間）</span></p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-gray-800">「リスクゼロの“プチ独立”経験が、最高の自信になりました」</p>
          <p className="text-gray-600 mt-4">将来独立したいと思っていましたが、この副業が最高の“助走期間”になっています。本業の安定を確保しながら、会社の看板なしで自分の力を試し、月20万円以上の収入が得られる。ここで得た経験と自信は、何物にも代えがたい財産です。</p>
          <p className="text-right mt-6 font-bold text-gray-700">– Nさん（28歳）/ メーカー勤務<br/><span className="font-normal text-sm">（副業月収：22万円 / 月稼働：約48時間）</span></p>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => {
  const steps = [
    { text: "1. 得意・興味のある商材を選択" },
    { text: "2. 本部が見込み顧客と日程調整" },
    { text: "3. ZOOMで商談→クロージング" },
    { text: "4. 成約後、成果報酬をお支払い" },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16">
          あなたにお任せする仕事の全体像
        </h2>
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-200">
                <p className="text-lg font-semibold text-gray-700">{step.text}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="my-4">
                  <span className="text-2xl font-bold text-blue-500 hidden md:block">→</span>
                  <span className="text-2xl font-bold text-blue-500 block md:hidden">↓</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const RequirementsSection = () => (
  <section id="requirements" className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">参加条件（オンライン面接あり）</h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
        <p className="font-semibold text-gray-800 mb-4">私たちは、本気の方とだけ、パートナーシップを組みたいと考えています。<br/>そのため、以下の参加条件を設けさせていただいております。</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>現在、本業の収入がある方（無職の方NG）</li>
          <li>現年収が550万円以上の方（副業も含む）</li>
          <li>年齢が25歳〜40歳の方</li>
          <li>PC／インターネット／静かな通話環境を準備できる方</li>
          <li>週5時間以上の稼働時間を確保できる方</li>
        </ul>
        <p className="mt-4 text-sm text-gray-600">※過去の営業経験は問いません。あなたのビジネスポテンシャルと、現状を変えたいという**「向上心」**を何よりも重視します。</p>
      </div>
       <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-gray-800 mb-2">【選考プロセスについて】</h3>
        <p className="text-gray-700">ご応募いただいた後、書類選考および、複数回のオンライン面接を実施します。これは、あなたのポテンシャルやスキル、そして私たちの価値観と真にフィットするかを、真剣に見極めさせていただくための重要なプロセスです。そのため、選考の結果、ご期待に沿えない場合もございますことを、何卒ご了承ください。私たちは、本気で現状を変えたいという強い意志とポテンシャルをお持ちの方を、全力で見つけ出し、サポートすることをお約束します。</p>
      </div>
    </div>
  </section>
);

const FaqSection = () => (
  <section id="faq" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">よくあるご質問（FAQ）</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">Q. 本当にアポ取りは一切ないですか？</h3>
          <p className="text-gray-600 pl-4 border-l-2 border-gray-300">A. はい。本部が日程調整まで済ませたミーティングURLに、時間になったら入室していただくだけです。</p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">Q. 副業禁止の会社ですが、本当に大丈夫ですか？</h3>
          <p className="text-gray-600 pl-4 border-l-2 border-gray-300">A. はい。これまでトラブルになった事例は一件もありません。報酬の受け取り方や住民税に関する確定申告の方法など、個別の状況に合わせて最適な手法を指南します。</p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">Q. ノルマはありますか？</h3>
          <p className="text-gray-600 pl-4 border-l-2 border-gray-300">A. ノルマはありません。またスケジュールはあなたが自由に決めることができるので、あなたの目標やライフスタイルに合わせて、担当マネージャーが目標達成まで一緒に設計し、伴走します。</p>
        </div>
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section id="entry" className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">今こそ、行動するタイミングです</h2>
      <p className="max-w-2xl mx-auto">あなたの5年後には、2つの未来しかありません。<br/>**「会社に依存せず、自分の力で稼ぐスキル」**を手に入れた未来か、何も変わらず、会社の昇給をただ待つ未来か。</p>
      <p className="max-w-2xl mx-auto mt-4 mb-8">収入も、キャリアも、市場価値も、すべて**“今”**のあなたの選択で決まります。</p>
      <p className="text-2xl font-bold mb-4">＼ まずは無料オンライン説明会・キャリア相談へ ／</p>
      <p className="max-w-2xl mx-auto mb-8">副業を始めるか迷っている段階でも構いません。あなたの市場価値を最大化する方法を、話を聞きに来るだけでも価値があります。</p>
      <a
        href="#entry-form" // This would typically link to a form or external site
        className="bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-500 transition duration-300 text-xl"
      >
        ▶︎ 【選考エントリーに進む（LINE登録）】
      </a>
      <p className="text-xs text-gray-400 mt-4 max-w-sm mx-auto">
        ※ご応募いただいた方から順に、選考のご案内をお送りします。<br/>
        ※サポート枠には限りがあり、応募者多数のため、予告なく募集を締め切る場合がございます。
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center text-sm">
      <p>&copy; {new Date().getFullYear()} セールス副業. All Rights Reserved.</p>
    </div>
  </footer>
);


export default function Home() {
  return (
    <main className="bg-gray-100">
      <HeroSection />
      <ProblemsSection />
      <InterludeSection />
      <ReasonsSection />
      <SimulationSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <RequirementsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
