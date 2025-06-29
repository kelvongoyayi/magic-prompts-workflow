import React from 'react';
import { TrendingUp } from 'lucide-react';
import Section from '../ui/Section';

export default function SuccessIndicatorsSection() {
  return (
    <Section id="success-indicators" title="Success Indicators" icon={TrendingUp}>
      <div className="space-y-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800/95 dark:to-gray-900/90 p-6 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm dark:shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📈 You're doing well when:</h3>
            <ul className="space-y-3">
              {[
                'Your app preview loads without errors',
                'Main features work when you test them',
                'Design looks good on both desktop and mobile',
                'You can explain what each part of your app does',
                'Users can complete the main tasks you designed for'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800/95 dark:to-gray-900/90 p-6 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm dark:shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🎓 Graduation Checklist</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">Before deploying, make sure:</p>
            <ul className="space-y-3">
              {[
                'All main features work',
                'App is mobile-friendly',
                'No console errors (check browser developer tools)',
                'Database is connected (if needed)',
                'User authentication works (if needed)',
                'App loads quickly',
                'You\'ve tested on different devices'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded mt-0.5"></div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-6 rounded-xl border border-blue-200/60 dark:border-blue-700/80 shadow-sm dark:shadow-lg backdrop-blur-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">💡 Benefits of Documentation-Guided Development</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">For Beginners:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Clear roadmap - Always know what's next</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Consistent quality - AI follows established standards</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Less decision fatigue - Just say "proceed"</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Learning opportunity - Understand through documentation</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">For the AI:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Better context - Understands full project vision</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Consistent decisions - References guidelines</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Efficient implementation - No re-explaining</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Quality assurance - Built-in standards</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">For the Project:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Maintainable code - Follows patterns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Scalable architecture - Planned from beginning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Complete features - Nothing gets forgotten</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Professional quality - Meets industry standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}