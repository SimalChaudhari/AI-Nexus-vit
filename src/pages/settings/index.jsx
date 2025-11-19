import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FiSettings, FiUser, FiBell, FiLock, FiMonitor } from 'react-icons/fi'

const metadata = { title: `Settings | AI Nexus` }

function SettingsPage() {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: FiUser,
      items: ['Edit Profile', 'Change Avatar', 'Update Bio'],
    },
    {
      title: 'Notifications',
      icon: FiBell,
      items: ['Email Notifications', 'Push Notifications', 'SMS Alerts'],
    },
    {
      title: 'Security',
      icon: FiLock,
      items: ['Change Password', 'Two-Factor Authentication', 'Login History'],
    },
    {
      title: 'Appearance',
      icon: FiMonitor,
      items: ['Theme Settings', 'Language', 'Display Preferences'],
    },
  ]

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FiSettings className="text-2xl text-primaryPalette-100" />
        <h1 className="text-2xl font-bold text-primaryPalette-200">Settings</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {settingsSections.map((section, index) => {
          const Icon = section.icon
          return (
            <div
              key={index}
              className="rounded-xl border border-primaryPalette-100/40 bg-secondaryPalette-50 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primaryPalette-100 p-2">
                  <Icon className="text-lg text-white" />
                </div>
                <h2 className="text-lg font-semibold text-primaryPalette-200">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-primaryPalette-50 transition hover:bg-secondaryPalette-50"
                  >
                    <span>{item}</span>
                    <button className="rounded px-3 py-1 text-xs font-semibold text-primaryPalette-100 transition hover:bg-primaryPalette-100/10">
                      Edit
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default SettingsPage

