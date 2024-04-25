// pages/404.js

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import DataGatherer from "../components/data-gatherer";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 5 seconds (optional)
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <DataGatherer />
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>404 - Page Not Found</h1>
        <p>
          The page you are looking for does not exist. You will be redirected to
          the home page shortly.
        </p>
        <Link href="/" style={{ textDecoration: "underline", color: "blue" }}>
          Go back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
