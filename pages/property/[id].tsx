import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
}

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    if (id) {
      // Replace with your real API call
      const fetchProperty = async () => {
        // Simulate fetch
        const data: Property = {
          id: id as string,
          title: `Sample Property ${id}`,
          description: 'This is a sample property description.',
          price: 150000,
        };
        setProperty(data);
      };

      fetchProperty();
    }
  }, [id]);

  if (!property) {
    return <p>Loading property details...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-700 mb-4">{property.description}</p>
      <p className="text-lg font-semibold text-green-600">${property.price}</p>
    </div>
  );
}
