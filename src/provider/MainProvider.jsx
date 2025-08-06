import { StateContextProvider } from "@/context/StateContext";
import useSyncLocalProject from "@/hooks/useSyncLocalProject";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MainProvider = ({ children }) => {
  useSyncLocalProject("demo-project-name"); // Please replace with your actual project name
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StateContextProvider>{children}</StateContextProvider>
      </QueryClientProvider>
    </>

    // <Provider store={store}> // Redux store provider
    //   <QueryClientProvider client={queryClient}> // React Query provider
    //     <AuthContextProvider>
    //       <StateContextProvider>
    //         <HelmetProvider> // React Helmet Async provider for managing document head
    //           {children}
    //           <Toaster position="top-right" reverseOrder={false} /> // React Hot Toast for notifications
    //         </HelmetProvider>
    //       </StateContextProvider>
    //     </AuthContextProvider>
    //     <ReactQueryDevtools initialIsOpen={false} />
    //   </QueryClientProvider>
    // </Provider>
  );
};

export default MainProvider;
