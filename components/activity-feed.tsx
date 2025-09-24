import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ShoppingCart, Settings } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "user",
    message: "New user registered",
    user: "John Doe",
    time: "2 minutes ago",
    icon: User,
  },
  {
    id: 2,
    type: "order",
    message: "New order placed",
    user: "Jane Smith",
    time: "5 minutes ago",
    icon: ShoppingCart,
  },
  {
    id: 3,
    type: "system",
    message: "System backup completed",
    user: "System",
    time: "10 minutes ago",
    icon: Settings,
  },
  {
    id: 4,
    type: "user",
    message: "User profile updated",
    user: "Bob Johnson",
    time: "15 minutes ago",
    icon: User,
  },
  {
    id: 5,
    type: "order",
    message: "Payment processed",
    user: "Alice Brown",
    time: "20 minutes ago",
    icon: ShoppingCart,
  },
]

export function ActivityFeed() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <activity.icon className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-card-foreground">
                  <span className="font-medium">{activity.user}</span> {activity.message}
                </p>
                <div className="flex items-center mt-1 space-x-2">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                  <Badge variant={activity.type === "system" ? "secondary" : "default"} className="text-xs">
                    {activity.type}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
