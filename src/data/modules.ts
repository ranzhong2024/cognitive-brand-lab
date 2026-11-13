import type { Lang } from '../utils/i18n';

export interface ModuleSection {
  number: string;
  title: string;
  desc: string;
}

export interface ModuleLinkRef {
  slug: string;
  name: string;
}

export interface ModuleDefinition {
  slug: string;
  id: 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6';
  title: string;
  description: string;
  systemContext: string;
  nextModule: ModuleLinkRef | null;
  prevModule: ModuleLinkRef | null;
  sections: ModuleSection[];
}

export const MODULES_DATA: Record<Lang, ModuleDefinition[]> = {
  zh: [
    {
      slug: 'm1-brand-foundations',
      id: 'M1',
      title: 'M1 勘测心智：锁定真实生活场景与心智入口 (Demand Radar & Mental Sensing)',
      description: '怎么让海外用户在产生需求的一瞬间，第一个想起你？基于 Byron Sharp CEPs 场景网格与 Clayton Christensen JTBD 任务雇佣理论。',
      systemContext: 'Layer 01 • 基础层 (Foundation Layer)',
      nextModule: { slug: 'm2-behavioral-science', name: 'M2: 信任质押与硬核公信力' },
      prevModule: null,
      sections: [
        { number: '01', title: 'Byron Sharp CEPs 场景网格构建', desc: '5W1H 购买触发情境扫描，构建多维度心智检索通路与物理可得性。' },
        { number: '02', title: 'Clayton Christensen JTBD 进展力学', desc: '推进力、拉动力、焦虑阻力与习惯惯性的四力平衡分析。' },
        { number: '03', title: 'AEO 机器语义与主题簇确权', desc: '在 ChatGPT / Perplexity / Google SGE 知识图谱中建立第一信源索引。' },
      ],
    },
    {
      slug: 'm2-behavioral-science',
      id: 'M2',
      title: 'M2 信任质押：打造不可伪造的硬核公信力与品牌指纹 (Unfakeable Trust & Proof Pledge)',
      description: '破译海外买家的信任防御机制，用 Michael Spence 昂贵信号与 Byron Sharp 独特品牌资产构建公信力护城河。',
      systemContext: 'Layer 01 • 基础层 (Foundation Layer)',
      nextModule: { slug: 'm3-strategic-pricing', name: 'M3: 价值定价与毛利工程' },
      prevModule: { slug: 'm1-brand-foundations', name: 'M1: 勘测心智与需求雷达' },
      sections: [
        { number: '01', title: 'Michael Spence 昂贵信号单次穿越', desc: '为什么口头宣传是零价值的？如何用高成本不可伪造投入实现分离均衡。' },
        { number: '02', title: 'Byron Sharp DBA 独特品牌资产网格', desc: '专属构型轮廓、色彩编码与声纹指纹的心智检索垄断。' },
        { number: '03', title: 'Rory Sutherland 仰巴脚效应 (Pratfall Effect)', desc: '主动暴露适用边界与劝退非目标客群，反向倍增核心承诺的可信度。' },
      ],
    },
    {
      slug: 'm3-strategic-pricing',
      id: 'M3',
      title: 'M3 价值定价：依据心理账户与 WTP 锁死 65%+ 战略毛利 (Strategic Value Pricing)',
      description: '怎么把商品卖得比对手贵 30%，还能捕获全部利润？拒绝亏本赚吆喝的恶性价格战。',
      systemContext: 'Layer 02 • 战略层 (Strategy Layer)',
      nextModule: { slug: 'm4-algorithmic-resonance', name: 'M4: 算法共振与创作者套利' },
      prevModule: { slug: 'm2-behavioral-science', name: 'M2: 信任质押与硬核背书' },
      sections: [
        { number: '01', title: 'Hermann Simon 定价微积分与利润杠杆', desc: '1% 价格改善带来 11.1% 营业利润增长的微观机制。' },
        { number: '02', title: 'McKinsey 价格瀑布漏损审计', desc: '堵住渠道佣金、运费逆向折损与 PPC 广告补贴黑洞。' },
        { number: '03', title: 'Good-Better-Best 3 档阶梯利润沙盘', desc: '通过阶梯产品矩阵提取消费者剩余，主推款毛利锁定在 65%+。' },
      ],
    },
    {
      slug: 'm4-algorithmic-resonance',
      id: 'M4',
      title: 'M4 算法共振：素材即定向探针与创作者信誉套利 (Algorithmic Resonance)',
      description: '为什么人工受众细分正在杀死利润？深度解构 Meta DLRM 算法拍卖动力学、说服知识模型 (PKM) 与红人白标授权。',
      systemContext: 'Layer 03 • 规模层 (Scale Layer)',
      nextModule: { slug: 'm5-conversion-engineering', name: 'M5: 极速转化与主权基建' },
      prevModule: { slug: 'm3-strategic-pricing', name: 'M3: 价值定价与毛利工程' },
      sections: [
        { number: '01', title: 'Meta DLRM 现代推荐拍卖与 AL-CAT', desc: '素材即定向：用高维语义探针让千亿参数算法自动找人。' },
        { number: '02', title: '说服知识模型 (PKM) 与准社会关系 (PSI)', desc: '为什么官方账号自夸被秒划走？借创作者信任资产击碎用户防御。' },
        { number: '03', title: 'Broad 1-CBO 极简账户与 3 秒 Hook 模式库', desc: '认知冲突、极限酷刑测试与前后对比模式，实现 CPA 规模化降低。' },
      ],
    },
    {
      slug: 'm5-conversion-engineering',
      id: 'M5',
      title: 'M5 极速转化：极速转化科学与 100px 近地证据链 (Rapid Conversion Science)',
      description: '让人脑 3 秒秒懂，让 AI 问答引擎主动首推。基于 MECLABS 启发式方程、System 1 直觉流畅性与 Core Web Vitals。',
      systemContext: 'Layer 03 • 转化层 (Conversion Layer)',
      nextModule: { slug: 'm6-compounding-retention', name: 'M6: 复利留存与因果度量' },
      prevModule: { slug: 'm4-algorithmic-resonance', name: 'M4: 算法共振与创作者套利' },
      sections: [
        { number: '01', title: 'MECLABS 转化启发式方程深度拆解', desc: '动机 4m + 价值 3v + 激励 2(i-f) - 焦虑 2a 的全链路落地。' },
        { number: '02', title: '100px 近地证据链与 3 秒首屏黄金三角', desc: '在结账 CTA 上下 100 像素内密织质保、时效、退换与安全支付防伪网。' },
        { number: '03', title: 'Google Core Web Vitals 物理性能底线', desc: 'LCP < 1.0s, INP < 100ms, CLS = 0 与 Schema.org JSON-LD 结构化数据。' },
      ],
    },
    {
      slug: 'm6-compounding-retention',
      id: 'M6',
      title: 'M6 复利留存：复利留存与因果增量度量 (Compounding Retention & Causal Lab)',
      description: '自适应行为流做管家，因果实验算清真利润。基于 Reforge 留存微笑曲线、沃顿商学院 BG/NBD 客户模型与 Rubin 因果推断。',
      systemContext: 'Layer 04 • 复利层 (Compounding Layer)',
      nextModule: null,
      prevModule: { slug: 'm5-conversion-engineering', name: 'M5: 极速转化与主权基建' },
      sections: [
        { number: '01', title: 'Donald Rubin 潜在因果推断与 Geo-Lift Holdout', desc: '通过停投实验剔除自然截流假归因，测算真实的 iROAS 净现金流。' },
        { number: '02', title: '沃顿商学院 Peter Fader BG/NBD 概率模型', desc: '后验存活概率 P(Alive) 精准分层与自适应生命周期动作。' },
        { number: '03', title: '6 大核心自适应流与发信域名物理信誉', desc: 'Flow-First 架构贡献 50%~70% CRM 利润，严格遵循 SPF/DKIM/DMARC 治理。' },
      ],
    },
  ],
  en: [
    {
      slug: 'm1-brand-foundations',
      id: 'M1',
      title: 'M1 Demand Radar: Owning Real Buying Situations & Category Entry Points',
      description: 'Become the first brand buyers think of when a real problem strikes. Built on Byron Sharp’s Category Entry Points (CEPs) and Clayton Christensen’s Jobs-to-be-Done.',
      systemContext: 'Layer 01 • Foundation Layer',
      nextModule: { slug: 'm2-behavioral-science', name: 'M2: Unfakeable Trust & Costly Signaling' },
      prevModule: null,
      sections: [
        { number: '01', title: 'Byron Sharp CEP Situational Grid', desc: 'Map 5W1H trigger moments into distinct mental retrieval paths paired with broad physical availability.' },
        { number: '02', title: 'Clayton Christensen JTBD Four Forces', desc: 'Diagnose Push, Pull, Anxiety, and Habit inertia across switch interviews and negative review mining.' },
        { number: '03', title: 'AEO Entity & Answer Engine Authority', desc: 'Structure semantic knowledge graphs so ChatGPT, Perplexity, and Google AI Overviews cite you as primary source.' },
      ],
    },
    {
      slug: 'm2-behavioral-science',
      id: 'M2',
      title: 'M2 Unfakeable Trust: Costly Signaling & Distinctive Brand Assets',
      description: 'Dismantle cross-border buyer skepticism using Michael Spence’s Costly Signaling equilibrium and Byron Sharp’s Distinctive Brand Assets (DBAs).',
      systemContext: 'Layer 01 • Foundation Layer',
      nextModule: { slug: 'm3-strategic-pricing', name: 'M3: Strategic Value Pricing & 65%+ Margin' },
      prevModule: { slug: 'm1-brand-foundations', name: 'M1: Demand Radar & Mental Sensing' },
      sections: [
        { number: '01', title: 'Michael Spence Costly Signaling', desc: 'Why zero-cost promises fail—and how uncopiable lab proof, torture tests, and long warranties create separating equilibria.' },
        { number: '02', title: 'Distinctive Brand Asset (DBA) Grid', desc: 'Monopolize visual recognition across industrial silhouettes, palette codes, and sonic cues rather than fragile taglines.' },
        { number: '03', title: 'Rory Sutherland Pratfall Effect', desc: 'Proactively state who your product is not for to multiply credibility on every core performance promise.' },
      ],
    },
    {
      slug: 'm3-strategic-pricing',
      id: 'M3',
      title: 'M3 Strategic Value Pricing: Protecting 65%+ Pocket Gross Margin',
      description: 'Charge 30%–50% above lookalikes while winning higher conversion. Escape cost-plus traps with mental accounting and Good-Better-Best ladders.',
      systemContext: 'Layer 02 • Strategy Layer',
      nextModule: { slug: 'm4-algorithmic-resonance', name: 'M4: Algorithmic Resonance & Creator Whitelisting' },
      prevModule: { slug: 'm2-behavioral-science', name: 'M2: Unfakeable Trust & Costly Signaling' },
      sections: [
        { number: '01', title: 'Hermann Simon Pricing Leverage', desc: 'Unlock why a 1% price realization gain lifts operating profit by ~11.1%—far outperforming volume discounts.' },
        { number: '02', title: 'Price Waterfall Leakage Audit', desc: 'Cap marketplace fees, shipping subsidization, return friction, and promo slippage strictly under 15%.' },
        { number: '03', title: 'Good-Better-Best Three-Tier Matrix', desc: 'Anchor perceived value with an extreme Best tier while steering 70% of volume into a 68%+ margin Better flagship.' },
      ],
    },
    {
      slug: 'm4-algorithmic-resonance',
      id: 'M4',
      title: 'M4 Algorithmic Resonance: Creative Is Targeting & Creator Whitelisting',
      description: 'Why manual interest targeting kills margin. Master Meta DLRM recommendation auctions, Persuasion Knowledge Model (PKM), and creator whitelisting.',
      systemContext: 'Layer 03 • Scale Layer',
      nextModule: { slug: 'm5-conversion-engineering', name: 'M5: Rapid Conversion & Sovereign Storefront' },
      prevModule: { slug: 'm3-strategic-pricing', name: 'M3: Strategic Value Pricing & 65%+ Margin' },
      sections: [
        { number: '01', title: 'Meta DLRM & AL-CAT Creative Probes', desc: 'Consolidate into Broad 1-CBO campaigns where distinct visual hooks let recommendation models find high-intent buyers.' },
        { number: '02', title: 'Persuasion Knowledge & Creator Trust', desc: 'Bypass ad blindness by distributing authentic proof through whitelisted creator identities (Partnership Ads).' },
        { number: '03', title: '3-Second Hook Pattern Vault', desc: 'Systematize cognitive pattern interrupts, torture tests, and side-by-side contrasts to compress CPA at scale.' },
      ],
    },
    {
      slug: 'm5-conversion-engineering',
      id: 'M5',
      title: 'M5 Rapid Conversion Science: Sub-Second Speed & 100px Proof Mesh',
      description: 'Make human System 1 decide in 3 seconds and AI search engines recommend first. Grounded in MECLABS heuristics and Core Web Vitals.',
      systemContext: 'Layer 03 • Conversion Layer',
      nextModule: { slug: 'm6-compounding-retention', name: 'M6: Compounding Retention & Causal Lift' },
      prevModule: { slug: 'm4-algorithmic-resonance', name: 'M4: Algorithmic Resonance & Creator Whitelisting' },
      sections: [
        { number: '01', title: 'MECLABS Conversion Heuristic', desc: 'Operationalize motivation, value clarity, friction removal, and anxiety reversal across every landing scroll depth.' },
        { number: '02', title: '100px Near-CTA Evidence Cluster', desc: 'Place review proof, multi-year warranty, delivery SLA, and free-return guarantees directly beside checkout buttons.' },
        { number: '03', title: 'Core Web Vitals & Schema.org Graph', desc: 'Enforce LCP < 1.0s, INP < 100ms, CLS = 0, and clean JSON-LD entities across every product and editorial URL.' },
      ],
    },
    {
      slug: 'm6-compounding-retention',
      id: 'M6',
      title: 'M6 Compounding Retention: Behavioral Flows & Causal Incrementality',
      description: 'Automate high-margin repeat revenue and measure true incremental lift via Reforge retention loops, BG/NBD modeling, and Rubin Causal Holdouts.',
      systemContext: 'Layer 04 • Compounding Layer',
      nextModule: null,
      prevModule: { slug: 'm5-conversion-engineering', name: 'M5: Rapid Conversion & Sovereign Storefront' },
      sections: [
        { number: '01', title: 'Donald Rubin Geo-Lift Holdout Tests', desc: 'Strip out organic cannibalization illusions to measure true incremental ROAS (iROAS >= 1.20) and net profit.' },
        { number: '02', title: 'Wharton BG/NBD P(Alive) Scoring', desc: 'Predict customer alive probability and repurchase cadence before churn hardens into permanent defection.' },
        { number: '03', title: 'Six Adaptive Flows & Domain Reputation', desc: 'Drive 50%–70% of CRM profit from automated event flows under strict SPF/DKIM/DMARC deliverability governance.' },
      ],
    },
  ],
};

export function getModules(lang: Lang): ModuleDefinition[] {
  return MODULES_DATA[lang];
}
