import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { UserTable } from "@/components/user-table"
import { ActivityFeed } from "@/components/activity-feed"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-balance">Dashboard Overview</h1>
          <div className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</div>
        </div>

        <StatsCards />

        <div className="grid gap-6 lg:grid-cols-2">
          <RevenueChart />
          <ActivityFeed />
        </div>

        <UserTable />
      </div>
    </DashboardLayout>
  )
}
