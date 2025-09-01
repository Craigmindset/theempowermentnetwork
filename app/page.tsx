import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Calendar, ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Help The People In Need
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Get Involved & Lend Helping Hand to Poor People
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our community is full of people who want to help. We work to connect those who need assistance with
                those who can provide it, creating lasting positive change in our neighborhood.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Discover More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Become Volunteer
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/happy-children-and-volunteers-in-community-setting.png"
                alt="Community volunteers helping children"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Cards Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">More Charity Better Lives</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Every donation, no matter the size, creates ripples of positive change throughout our community,
                  improving lives one person at a time.
                </CardDescription>
                <Button variant="ghost" className="mt-4 text-primary hover:text-primary/80">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow bg-accent/5">
              <CardHeader>
                <div className="mx-auto bg-accent/20 p-4 rounded-full w-fit mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">How Become Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Join our dedicated team of volunteers and make a direct impact in your community. Together, we can
                  achieve more than we ever could alone.
                </CardDescription>
                <Button variant="ghost" className="mt-4 text-accent hover:text-accent/80">
                  Join Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Inspire Help Raised</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Through community events and fundraising initiatives, we bring people together to support those who
                  need it most in our neighborhood.
                </CardDescription>
                <Button variant="ghost" className="mt-4 text-primary hover:text-primary/80">
                  View Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                About Us
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Purpose of this Project is to Assist the Poor People
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground p-2 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Treatment Help</h4>
                    <p className="text-sm text-muted-foreground">
                      There are many variations of passages of Lorem Ipsum available
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground p-2 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Help Raising</h4>
                    <p className="text-sm text-muted-foreground">
                      That's a good reason to have target children opposed to not bad
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90">
                Discover More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <img
                src="/community-volunteers-helping-children-with-educati.png"
                alt="Community assistance programs"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">People Helped</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              We Help Poor This Life's Service Now
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fund Poor Raised",
                description:
                  "Providing financial assistance to families in need through community fundraising efforts.",
                image: "/hands-holding-money-for-charity-donation.png",
              },
              {
                title: "Money This Treatment",
                description: "Supporting medical expenses and healthcare access for those who cannot afford treatment.",
                image: "/medical-care-and-treatment-assistance.png",
              },
              {
                title: "Fund Hand Children",
                description: "Dedicated programs to support children's education, nutrition, and development needs.",
                image: "/children-receiving-educational-support-and-care.png",
              },
              {
                title: "Inspire Help Raised",
                description: "Motivating community members to contribute and make a positive impact together.",
                image: "/inspiring-community-volunteers-working-together.png",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            What They are Talking About Community Help
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of community members who are making a difference. Your support helps us continue our mission
            of helping those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Involved Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
