"use client";

import React, { useEffect, useState } from "react";
import { getOrders } from "@/helpers/users.helper";

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<any>();
  const [purchaseHistory, setPurchaseHistory] = useState<any[]>([]);
  const [showPurchaseHistory, setShowPurchaseHistory] =
    useState<boolean>(false);
  const [showPersonalInfo, setShowPersonalInfo] = useState<boolean>(true);
  const [showTotalSpent, setShowTotalSpent] = useState<boolean>(false);
  const [totalSpent, setTotalSpent] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userToken = localStorage.getItem("userToken");
        if (userToken) {
          const orders = await getOrders(userToken);
          console.log(orders);
          setPurchaseHistory(orders);
          calculateTotalSpent(orders);

          const userSessionData = localStorage.getItem("userSesion");
          if (userSessionData) {
            const parsedData = JSON.parse(userSessionData);
            setUserData(parsedData);
          }
        }
      } catch (error) {
        console.error("Error obteniendo las órdenes:", error);
      }
    };

    fetchData();
  }, []);

  const calculateTotalSpent = async (orders: any[]) => {
    let total = 0;

    for (const order of orders) {
      for (const product of order.products) {
        total += product.price;
      }
    }

    setTotalSpent(total);
  };

  const handleShowSection = (section: string) => {
    setShowPersonalInfo(section === "personalInfo");
    setShowPurchaseHistory(section === "purchaseHistory");
    setShowTotalSpent(section === "totalSpent");
  };

  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="lg:col-span-1  p-4">
        <ul>
          <li
            className={`cursor-pointer py-10 px-20 ${
              showPersonalInfo ? "bg-purple-600 text-white" : "bg-gray-500"
            }`}
            onClick={() => handleShowSection("personalInfo")}
          >
            Información Personal
          </li>
          <li
            className={`cursor-pointer py-10 px-20 ${
              showPurchaseHistory ? "bg-purple-600 text-white" : "bg-gray-500"
            }`}
            onClick={() => handleShowSection("purchaseHistory")}
          >
            Historial de Compras
          </li>
          <li
            className={`cursor-pointer py-10 px-20 ${
              showTotalSpent ? "bg-purple-600 text-white" : "bg-gray-500"
            }`}
            onClick={() => handleShowSection("totalSpent")}
          >
            Total Gastado
          </li>
        </ul>
      </div>

      <div className="lg:col-span-3 p-4">
        {showPersonalInfo && (
          <div>
            <h2 className="text-xl font-semibold my-4 text-purple-500">
              Información Personal
            </h2>
            {userData && (
              <div>
                <p className="py-2">Nombre: {userData.name}</p>
                <p className="py-2">Email: {userData.email}</p>
                <p className="py-2">Dirección: {userData.address} </p>
                <p className="py-2">Teléfono: {userData.phone} </p>
              </div>
            )}
          </div>
        )}
        {showPurchaseHistory && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-purple-500 my-4">
              Historial de Compras
            </h2>
            {purchaseHistory.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {purchaseHistory.map((purchase, index) => (
                  <div
                    key={index}
                    className="border-2 border-purple-400 p-4 rounded-md"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-purple-400">
                      Orden {index + 1}
                    </h3>
                    <p>Fecha: {new Date(purchase.date).toLocaleString()}</p>
                    <p className="my-2">Estado: {purchase.status}</p>
                    {purchase.products.map(
                      (product: any, productIndex: number) => (
                        <div
                          key={productIndex}
                          className="flex items-center py-5 border border-gray-500 pl-5 rounded my-5"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-24 mr-2"
                          />
                          <p>
                            {product.name} - ${product.price}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>No hay historial de compras disponible.</p>
            )}
          </div>
        )}
        {showTotalSpent && (
          <div>
            <h2 className="text-xl font-semibold my-4 text-purple-500">
              Total Gastado
            </h2>
            <p>$ {totalSpent}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
