"use client";
import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<any>();
  const [purchaseHistory, setPurchaseHistory] = useState<any[]>([]);
  const [showPurchaseHistory, setShowPurchaseHistory] =
    useState<boolean>(false);
  const [showPersonalInfo, setShowPersonalInfo] = useState<boolean>(true);
  const [showTotalSpent, setShowTotalSpent] = useState<boolean>(false);

  useEffect(() => {
    const userSessionData = localStorage.getItem("userSesion");
    if (userSessionData) {
      const parsedData = JSON.parse(userSessionData);
      setUserData(parsedData);
    }
  }, []);

  const handleShowSection = (section: string) => {
    setShowPersonalInfo(section === "personalInfo");
    setShowPurchaseHistory(section === "purchaseHistory");
    setShowTotalSpent(section === "totalSpent");
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-500 p-4">
        <ul>
          <li
            className="cursor-pointer"
            onClick={() => handleShowSection("personalInfo")}
          >
            Información Personal
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleShowSection("purchaseHistory")}
          >
            Historial de Compras
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleShowSection("totalSpent")}
          >
            Total Gastado
          </li>
        </ul>
      </div>

      <div className="w-3/4 p-4">
        {showPersonalInfo && (
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Información Personal:
            </h2>
            {userData && (
              <div>
                <p>Nombre: {userData.name}</p>
                <p>Email: {userData.email}</p>
                {/* Agrega más información personal si es necesario */}
              </div>
            )}
          </div>
        )}
        {showPurchaseHistory && (
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Historial de Compras:
            </h2>
            {purchaseHistory.length > 0 ? (
              <ul>
                {purchaseHistory.map((purchase, index) => (
                  <li key={index}>
                    <p>Estado: {purchase.status}</p>
                    <p>Fecha: {new Date(purchase.date).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay historial de compras disponible.</p>
            )}
          </div>
        )}
        {showTotalSpent && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Total Gastado:</h2>
            <p>Aquí puedes mostrar el total gastado por el usuario.</p>
          </div>
        )}
        {/* Aquí puedes agregar el gráfico de ventas del mes */}
      </div>
    </div>
  );
};

export default Dashboard;
