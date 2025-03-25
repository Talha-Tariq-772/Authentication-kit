// hooks/useUserRedirect.tsx
"use client"
import { useUserContext } from "@/context/userContext"
import { useRouter } from "next/navigation";
import { useEffect } from "react"

const useUserRedirect = (redirectPath: string) => {
    const { userLoggedInStatus } = useUserContext();
    const router = useRouter();
    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const isLoggedIn = await userLoggedInStatus();
                
                // Corrected logic: Only redirect if NOT logged in
                if (!isLoggedIn) {
                    router.push(redirectPath);
                }
            } catch (error) {
                console.log("Auth check failed", error);
                router.push(redirectPath);
            }
        };
        checkAuth();
    }, [redirectPath, userLoggedInStatus, router]);
};

export default useUserRedirect;