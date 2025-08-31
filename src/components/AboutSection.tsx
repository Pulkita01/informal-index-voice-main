import { TrendingUp, GraduationCap, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showInsightsModal, setShowInsightsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initiatives = [
    {
      icon: GraduationCap,
      title: "Enrolement Campaigns",
      description:
        "We help informal workers understand available government schemes, guide them through the application process, and assist in completing registrations for around 100 workers. We track dropouts, required documents, and time per person, documenting challenges to streamline future registration efforts and ensure more workers benefit efficiently from these schemes.",
    },
    {
      icon: TrendingUp,
      title: "Building an Index",
      description:
        "Based on slum surveys covering debt cycles, saving habits, income volatility, scheme awareness, migration patterns.",
      isClickable: true,
    },
    {
      icon: Heart,
      title: "Donation Drives",
      description:
        "Providing resources where they're most needed, directly impacting lives in informal communities.",
    },
    {
      icon: Users,
      title: "Pushing for Change",
      description:
        "We work to make government schemes and policies more accessible for informal workers by explaining benefits, guiding them through applications, and assisting with registrations.",
    },
  ];

  const insightsData = [
    {
      title: "Education Level vs Work and Savings",
      points: [
        "Illiterate → Lowest savings, fewer work hours",
        "10th pass → Longest work hours, negligible savings",
        "12th+ → Highest savings, but still high work demands",
      ],
    },
    {
      title: "Financial Correlations Analysis",
      points: [
        "Age vs Savings → Weak negative correlation (-0.15)",
        "Hours Worked vs Earnings → Weak positive correlation (0.09)",
        "Age vs Hours Worked → Strongest positive correlation (0.23)",
      ],
    },
    {
      title: "Social Security & Awareness Insights",
      points: [
        "45.9% have e-Shram cards, only 1.8% enrolled in PM-SYM",
        "48.3% of women in debt vs 41.7% of men",
        "59% with middle school+ took skill training",
        "42.4% migrated for work; 44.9% migrate seasonally",
      ],
    },
  ];

  const handleBuildingIndexClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setShowInsightsModal(true);
      setIsLoading(false);
    }, 400);
  };

  const handleKeyPress = (event: React.KeyboardEvent, onClick?: () => void) => {
    if ((event.key === "Enter" || event.key === " ") && onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <section ref={ref} id="about" className="section-padding bg-background">
      <div className="container-width">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-accent-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Bridging the gap between India's informal economy and formal recognition through data, education, and community empowerment.
          </motion.p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => {
            const isClickable = initiative.isClickable;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                {/* Clickable wrapper for "Building an Index" */}
                {isClickable ? (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={handleBuildingIndexClick}
                    onKeyDown={(e) => handleKeyPress(e, handleBuildingIndexClick)}
                    className={`cursor-pointer group h-full smooth-transition ${
                      isLoading ? "pointer-events-none opacity-70 animate-pulse" : ""
                    }`}
                  >
                    <Card className="h-full bg-card border border-border hover:shadow-2xl hover:scale-105">
                      <CardContent className="p-8 text-center">
                        <div className="mb-6 flex justify-center">
                          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/20 group-hover:bg-primary/40">
                            <initiative.icon className="w-8 h-8 text-primary group-hover:scale-110" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-red-600">
                          {initiative.title} <span className="animate-pulse pointer-events-none">🔍</span>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed pointer-events-none">{initiative.description}</p>
                        <span className="block mt-3 text-primary font-bold bg-primary/10 px-3 py-2 rounded-lg border border-primary/30 animate-pulse pointer-events-none">
                          {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                              Loading insights...
                            </span>
                          ) : (
                            <>Click to explore data insights</>
                          )}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <Card className="h-full bg-card border border-border hover:shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/20 group-hover:bg-primary/30">
                          <initiative.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">{initiative.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{initiative.description}</p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Insights Modal */}
        <Dialog open={showInsightsModal} onOpenChange={setShowInsightsModal}>
          <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-background to-card border-2 border-primary/30">
            <DialogHeader className="text-center relative">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.2, type: "spring", bounce: 0.6 }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
              >
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg glow-effect">
                  <span className="font-bold text-2xl">IEI</span>
                </div>
              </motion.div>
              <DialogTitle className="text-4xl font-bold text-foreground mb-2 mt-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Quantifying the Unseen
              </DialogTitle>
              <p className="text-accent-foreground text-lg">
                India's comprehensive data on informal economy workers
              </p>
            </DialogHeader>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              {insightsData.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="bg-card border-border h-full">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-4">{insight.title}</h4>
                      <ul className="space-y-3">
                        {insight.points.map((point, i) => (
                          <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AboutSection;
