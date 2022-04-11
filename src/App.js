import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Loading } from './views/components/Loading/Loading'
import NoMatch from './views/pages/NoMatch/NoMatch'
import { routeConfig } from './routes/routes'
import AppProvider from './context/AppProvider'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <AppProvider>
      <div className="wrapper">
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              {routeConfig.map((route) => (
                <Route
                  key={route.id}
                  path={route.path}
                  element={
                    route.isProtected ? (
                      <PrivateRoute>
                        <route.component />
                      </PrivateRoute>
                    ) : (
                      <route.component />
                    )
                  }
                />
              ))}

              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </AppProvider>
  )
}

export default App
