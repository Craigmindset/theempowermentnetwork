import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Food Drive",
      description:
        "Help us collect non-perishable food items for families in need. Every donation makes a difference in someone's life.",
      date: "2024-02-15",
      time: "9:00 AM - 4:00 PM",
      location: "Community Center, 123 Main St",
      category: "Fundraising",
      attendees: 45,
      image: "/community-food-drive-volunteers-sorting-donations.png",
      featured: true,
    },
    {
      id: 2,
      title: "Children's Education Workshop",
      description:
        "Free tutoring and educational activities for children aged 6-12. Volunteers needed to help with reading and math.",
      date: "2024-02-20",
      time: "2:00 PM - 5:00 PM",
      location: "Local Library, 456 Oak Ave",
      category: "Education",
      attendees: 28,
      image: "/children-education-workshop-tutoring-session.png",
      featured: false,
    },
    {
      id: 3,
      title: "Senior Care Visit",
      description:
        "Spend time with elderly residents at the local nursing home. Bring joy through conversation, games, and activities.",
      date: "2024-02-25",
      time: "1:00 PM - 4:00 PM",
      location: "Sunset Nursing Home, 789 Pine St",
      category: "Community Service",
      attendees: 15,
      image: "/senior-care-volunteers-spending-time-with-elderly.png",
      featured: false,
    },
    {
      id: 4,
      title: "Charity Gala Dinner",
      description:
        "Join us for an elegant evening of dining, entertainment, and fundraising to support our community programs.",
      date: "2024-03-05",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Hotel Ballroom, 321 Elm St",
      category: "Fundraising",
      attendees: 120,
      image: "/charity-gala-dinner-elegant-fundraising-event.png",
      featured: true,
    },
    {
      id: 5,
      title: "Park Cleanup Day",
      description:
        "Help beautify our local parks by removing litter, planting flowers, and maintaining walking trails.",
      date: "2024-03-10",
      time: "8:00 AM - 12:00 PM",
      location: "Riverside Park, 654 River Rd",
      category: "Environment",
      attendees: 35,
      image: "/park-cleanup-volunteers-beautifying-community-space.png",
      featured: false,
    },
    {
      id: 6,
      title: "Medical Assistance Fair",
      description: "Free health screenings, medical consultations, and wellness information for community members.",
      date: "2024-03-15",
      time: "10:00 AM - 3:00 PM",
      location: "Community Health Center, 987 Health Way",
      category: "Healthcare",
      attendees: 80,
      image: "/medical-assistance-fair-health-screenings.png",
      featured: false,
    },
  ]

  const pastEvents = [
    {
      id: 7,
      title: "Winter Coat Distribution",
      description: "Successfully distributed 200+ winter coats to families in need during the cold season.",
      date: "2024-01-20",
      location: "Community Center",
      category: "Community Service",
      attendees: 60,
      image: "/winter-coat-distribution-helping-families.png",
    },
    {
      id: 8,
      title: "Holiday Toy Drive",
      description: "Collected and distributed over 500 toys to children during the holiday season.",
      date: "2023-12-15",
      location: "Various Locations",
      category: "Fundraising",
      attendees: 95,
      image: "/holiday-toy-drive-children-receiving-gifts.png",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Fundraising":
        return "bg-primary/10 text-primary"
      case "Education":
        return "bg-accent/10 text-accent"
      case "Community Service":
        return "bg-blue-100 text-blue-700"
      case "Environment":
        return "bg-green-100 text-green-700"
      case "Healthcare":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Community Events
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Join Our Community Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Be part of something bigger. Our events bring the community together to make a positive impact on the lives
            of those who need it most.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                All Categories
              </Button>
              <Button variant="outline" size="sm">
                Fundraising
              </Button>
              <Button variant="outline" size="sm">
                Education
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Events */}
            <div className="lg:col-span-2 space-y-6">
              {upcomingEvents
                .filter((event) => event.featured)
                .map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                          <Badge variant="outline" className="bg-accent/10 text-accent">
                            Featured
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                            {new Date(event.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2 text-primary" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="h-4 w-4 mr-2 text-primary" />
                            {event.attendees} people attending
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="bg-primary hover:bg-primary/90">Register Now</Button>
                          <Button variant="outline">Learn More</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>

            {/* Regular Events Sidebar */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">More Events</h3>
              {upcomingEvents
                .filter((event) => !event.featured)
                .map((event) => (
                  <Card key={event.id} className="hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <Badge className={`absolute top-2 left-2 ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {event.attendees} attending
                      </div>
                      <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                        Join Event
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      {event.attendees} people participated
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Make a Difference?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our community of volunteers and help us create positive change. Every event is an opportunity to impact
            lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Become a Volunteer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
