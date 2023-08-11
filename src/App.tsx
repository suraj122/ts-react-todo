import { useEffect, useState } from "react"
import ReminderList from "./components/ReminderList"
import Reminder from "./models/reminder"
import reminderService from "./services/reminder"
import NewReminder from "./components/NewReminder"

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  useEffect(() => {
    loadReminders()
  }, [])

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders()
    setReminders(reminders)
  }

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id))
  }

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminders(title);
    setReminders([newReminder, ...reminders])
  }

  return (
    <>
      <div className="p-5 container mx-auto">
        <NewReminder onAddReminder={addReminder} />
        <ReminderList onRemoveReminder={removeReminder} items={reminders} />
      </div>
      
    </>
  )
}

export default App
