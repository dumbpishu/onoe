import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
    {
        title: "Unified Electoral Process",
        description: "Streamline elections across the nation into a single, efficient process saving time and resources.",
        icon: "🏛️"
    },
    {
        title: "Cost Effective",
        description: "Reduce the massive expenditure incurred in conducting multiple elections across states.",
        icon: "💰"
    },
    {
        title: "Enhanced Governance",
        description: "Enable governments to focus on development work rather than frequent election cycles.",
        icon: "📈"
    },
    {
        title: "Reduced Voter Fatigue",
        description: "Minimize voter exhaustion from frequent polling and increase voter participation.",
        icon: "🗳️"
    },
    {
        title: "Unified National Development",
        description: "Promote cohesive policy implementation across all states for holistic growth.",
        icon: "🌐"
    },
    {
        title: "Strengthened Democracy",
        description: "Foster greater stability in the democratic system with synchronized elections.",
        icon: "⚖️"
    }
]

export const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-[#000080] via-[#000080] to-[#FF9933]/20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDgwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF9933] via-white to-[#138808] p-1 shadow-xl">
                                <div className="w-full h-full rounded-full bg-[#000080] flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">ONOE</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                                One Nation, One Election
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                                A transformative initiative to synchronize state and national elections, 
                                building a unified and efficient democratic framework for India.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-6 py-4">
                            <div className="w-16 h-3 bg-[#FF9933] rounded-full shadow-lg"></div>
                            <div className="w-16 h-3 bg-white rounded-full shadow-lg"></div>
                            <div className="w-16 h-3 bg-[#138808] rounded-full shadow-lg"></div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link to="/login">
                                <Button size="lg" className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white font-semibold px-8">
                                    Get Started
                                </Button>
                            </Link>
                            <Button size="lg" variant="outline" className="border-white text-[#000080] hover:bg-white hover:text-[#000080]">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
                            Why One Nation One Election?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A comprehensive solution to transform India's electoral landscape 
                            for better governance and national unity.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-t-4 border-t-[#FF9933] hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-4xl mb-2">{feature.icon}</div>
                                    <CardTitle className="text-[#000080]">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-[#000080] via-[#FF9933] to-[#138808]">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Building a United Future
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
                        Join the movement towards a more efficient, cost-effective, and unified 
                        democratic system that serves all Indians.
                    </p>
                    <Link to="/login">
                        <Button size="lg" className="bg-white text-[#000080] hover:bg-white/90 font-semibold">
                            Join Now
                        </Button>
                    </Link>
                </div>
            </section>

            <section className="py-16 bg-card">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-[#FF9933] mb-2">50+</div>
                            <div className="text-muted-foreground">States & UTs</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#000080] mb-2">900M+</div>
                            <div className="text-muted-foreground">Eligible Voters</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#138808] mb-2">1M+</div>
                            <div className="text-muted-foreground">Polling Stations</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
