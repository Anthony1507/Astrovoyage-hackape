import React, { useRef, useMemo, useCallback } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Sphere, Ring, Line, Text } from '@react-three/drei'
import * as THREE from 'three'

// Constantes de escala y tamaño
const SUN_RADIUS = 0.1
const AU = 2 // Reduced scale to make everything closer
const PLANET_SCALE = 3 // Increase planet size
const SATELLITE_DISTANCE_SCALE = 50 // Significantly increase satellite distances

// Datos orbitales de los planetas
interface OrbitalData {
  label: string
  eccentricity: number
  inclination: number
  omega: number
  period: number
  raan: number
  sma: number
  tau: number
  radius: number
  color: string
  moons?: { label: string; radius: number; distance: number; color: string; period: number }[]
  rings?: { innerRadius: number; outerRadius: number; color: string }[]
}

// planetas
const orbitalData: OrbitalData[] = [
  { label: 'Mercury', eccentricity: 0.20563, inclination: 3.38, omega: 48.331, period: 88.0, raan: 281.01, sma: 0.387098, tau: 29.124, radius: 0.0016 * PLANET_SCALE, color: '#8C7853' },
  { label: 'Venus', eccentricity: 0.006772, inclination: 3.86, omega: 76.68, period: 224.701, raan: 272.76, sma: 0.723332, tau: 54.884, radius: 0.0038 * PLANET_SCALE, color: '#FFA500' },
  { 
    label: 'Earth', eccentricity: 0.016708, inclination: 7.155, omega: -11.26064, period: 365.25638, raan: 23.439281, sma: 1.0, tau: 114.20783, radius: 0.0040 * PLANET_SCALE, color: '#4169E1',
    moons: [{ 
      label: 'Moon', 
      radius: 0.0011 * PLANET_SCALE, 
      distance: 0.00257 * SATELLITE_DISTANCE_SCALE, // Increase the distance
      color: '#C0C0C0', 
      period: 27.3 
    }]
  }, 
  { 
    label: 'Mars', eccentricity: 0.0934, inclination: 5.65, omega: 49.558, period: 686.971, raan: 317.68143, sma: 1.523679, tau: 286.502, radius: 0.0021 * PLANET_SCALE, color: '#FF4500',
    moons: [
      { 
        label: 'Phobos', 
        radius: 0.0005 * PLANET_SCALE, 
        distance: 0.00094 * SATELLITE_DISTANCE_SCALE, // Increase the distance
        color: '#8B4513', 
        period: 0.3189 
      },
      { 
        label: 'Deimos', 
        radius: 0.0003 * PLANET_SCALE, 
        distance: 0.00235 * SATELLITE_DISTANCE_SCALE, // Increase the distance
        color: '#A9A9A9', 
        period: 1.263 
      }
    ]
  }, 
  { 
    label: 'Jupiter', eccentricity: 0.0489, inclination: 6.09, omega: 100.464, period: 4332.59, raan: 268.057, sma: 5.2044, tau: 273.867, radius: 0.0444 * PLANET_SCALE, color: '#DEB887',
    moons: [
      { 
        label: 'Io', 
        radius: 0.0015 * PLANET_SCALE, 
        distance: 0.002819 * SATELLITE_DISTANCE_SCALE, // Increase the distance
        color: '#F4A460', 
        period: 1.769 
      },
      { 
        label: 'Europa', 
        radius: 0.0014 * PLANET_SCALE, 
        distance: 0.004486 * SATELLITE_DISTANCE_SCALE, // Increase the distance
        color: '#D2691E', 
        period: 3.551 
      },
      { 
        label: 'Ganymede', 
        radius: 0.0012 * PLANET_SCALE, 
        distance: 0.007155 * SATELLITE_DISTANCE_SCALE, // Increase the distance
        color: '#CD853F', 
        period: 7.154 
      },

      { 
        label: 'Callisto', 
        radius: 0.0011 * PLANET_SCALE, 
        distance: 0.01257 * SATELLITE_DISTANCE_SCALE, // Increase the distance
        color: '#8B4513', 
        period: 16.689
      },

      { 
        label: 'Carme', 
        radius: 0.0006 * PLANET_SCALE, // Ajusta el tamaño según tu escala
        distance: 0.017 * SATELLITE_DISTANCE_SCALE, // Distancia desde el centro de Júpiter
        color: '#A9A9A9', // Color del satélite
        period: 0.65 // Período orbital en días
      }

    ]
  }, 
  { 
    label: 'Saturn', eccentricity: 0.0565, inclination: 5.51, omega: 113.665, period: 10759.22, raan: 40.589, sma: 9.5826, tau: 339.392, radius: 0.0378 * PLANET_SCALE, color: '#F0E68C',
    rings: [{ 
      innerRadius: 0.0575 * PLANET_SCALE, 
      outerRadius: 0.1375 * PLANET_SCALE, 
      color: '#FFD700' 
    }],
    moons: [{ 
      label: 'Titan', 
      radius: 0.0008 * PLANET_SCALE, 
      distance: 0.008168 * SATELLITE_DISTANCE_SCALE, // Increase the distance
      color: '#B8860B', 
      period: 15.945 
    }]
  }, 
  { 
    label: 'Uranus', eccentricity: 0.046381, inclination: 6.48, omega: 74.006, period: 30688.5, raan: 257.311, sma: 19.2184, tau: 96.998856, radius: 0.0160 * PLANET_SCALE, color: '#ADD8E6',
    moons: [{ 
      label: 'Titania', 
      radius: 0.0005 * PLANET_SCALE, 
      distance: 0.004636 * SATELLITE_DISTANCE_SCALE, // Increase the distance
      color: '#E6E6FA', 
      period: 8.706 
    }]
  }, 
  { 
    label: 'Neptune', eccentricity: 0.009456, inclination: 6.43, omega: 131.784, period: 60182.0, raan: 299.3, sma: 30.110388, tau: 276.336, radius: 0.0155 * PLANET_SCALE, color: '#4169E1',
    moons: [{ 
      label: 'Triton', 
      radius: 0.0006 * PLANET_SCALE, 
      distance: 0.002371 * SATELLITE_DISTANCE_SCALE, // Increase the distance
      color: '#F0F8FF', 
      period: 5.877 
    }]
  },
  { 
    label: 'Pluto', eccentricity: 0.2488, inclination: 11.88, omega: 110.299, period: 90560.0, raan: 132.993, sma: 39.48, tau: 113.834, radius: 0.0007 * PLANET_SCALE, color: '#A0522D' }
];


// asteroides
const asteroidData = [
  { label: 'Ceres', sma: 2.7675, eccentricity: 0.0758, radius: 0.0003 * PLANET_SCALE, color: '#8B8989' },
  { label: 'Vesta', sma: 2.3615, eccentricity: 0.0887, radius: 0.0002 * PLANET_SCALE, color: '#CD853F' },
  { label: 'Pallas', sma: 2.7724, eccentricity: 0.2312, radius: 0.0002 * PLANET_SCALE, color: '#D3D3D3' },
];


//cometas
const cometData = [
  {
    label: 'P/2004 R1 (McNaught)',
    eccentricity: 0.682526943,
    inclination: 4.894555854, // en grados
    omega: 0.626837835, // argumento del perihelio
    period: 5.48, // período en años
    raan: 295.9854497, // longitud del nodo ascendente
    sma: 1.0, // semi-eje mayor (puedes ajustarlo según tus necesidades)
    color: '#FF4500', // color representativo
    // Aquí podrías agregar propiedades adicionales como la distancia de acercamiento (moid_au)
  },
  {
    label: 'P/2008 S1 (Catalina-McNaught)',
    eccentricity: 0.6663127807,
    inclination: 15.1007464,
    omega: 203.6490232,
    period: 6.74,
    raan: 111.3920029,
    sma: 1.0,
    color: '#1E90FF',
  },
  {
    label: '1P/Halley',
    eccentricity: 0.9671429085,
    inclination: 162.2626906,
    omega: 111.3324851,
    period: 75.32,
    raan: 58.42008098,
    sma: 1.0,
    color: '#FFD700',
  },
  // Agrega más cometas según sea necesario
];



interface CelestialBodyProps {
  data: OrbitalData
  onFocus: (position: THREE.Vector3) => void
}

const CelestialBody: React.FC<CelestialBodyProps> = ({ data, onFocus }) => {
  const ref = useRef<THREE.Group>(null)
  const { camera } = useThree()
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = (clock.getElapsedTime() / data.period) * Math.PI * 2
      const a = data.sma * AU
      const e = data.eccentricity
      const cosE = Math.cos(t)
      const sinE = Math.sin(t)
      
      const x = a * (cosE - e)
      const y = a * Math.sqrt(1 - e * e) * sinE
      
      ref.current.position.set(x, 0, -y)
      ref.current.rotation.y += 0.01
    }
  })

  const orbitPoints = useMemo(() => {
    const points = []
    for (let i = 0; i <= 64; i++) {
      const t = (i / 64) * Math.PI * 2
      const a = data.sma * AU  // * au=unidad astronómica
      const e = data.eccentricity
      const cosE = Math.cos(t)
      const sinE = Math.sin(t)
      
      const x = a * (cosE - e)
      const y = a * Math.sqrt(1 - e * e) * sinE
      
      points.push(new THREE.Vector3(x, 0, -y))
    }
    return points
  }, [data.sma, data.eccentricity])

  const handleClick = useCallback((event: THREE.Event) => {
    event.stopPropagation()
    if (ref.current) {
      onFocus(ref.current.position)
      camera.lookAt(ref.current.position)
    }
  }, [camera, onFocus])

  return (
    <group>
      <Line points={orbitPoints} color={data.color} lineWidth={1} />
      <group ref={ref}>
        <Sphere args={[data.radius * AU, 32, 32]} onClick={handleClick}>
          <meshStandardMaterial color={data.color} roughness={0.5} />
        </Sphere>
        <Text
          position={[0, data.radius * AU * 1.2, 0]}
          fontSize={data.radius * AU * 0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {data.label}
        </Text>
        {data.moons?.map((moon, index) => (
          <group key={index} rotation={[0, Math.random() * Math.PI * 2, 0]}>
            <Line
              points={useMemo(() => {
                const points = []
                for (let i = 0; i <= 64; i++) {
                  const angle = (i / 64) * Math.PI * 2
                  points.push(new THREE.Vector3(
                    Math.cos(angle) * moon.distance * AU,
                    0,
                    Math.sin(angle) * moon.distance * AU
                  ))
                }
                return points
              }, [moon.distance])}
              color={moon.color}
              lineWidth={0.5}
            />
            <group rotation={[0, 0, 0]}>
              <Sphere
                args={[moon.radius * AU, 16, 16]}
                position={[moon.distance * AU, 0, 0]}
                onClick={handleClick}
              >
                <meshStandardMaterial color={moon.color} roughness={0.6} />
              </Sphere>
              <Text
                position={[moon.distance * AU, moon.radius * AU * 1.2, 0]}
                fontSize={moon.radius * AU * 0.5}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {moon.label}
              </Text>
            </group>
          </group>
        ))}
        {data.rings?.map((ring, index) => (
          <Ring
            key={index}
            args={[ring.innerRadius * AU, ring.outerRadius * AU, 64]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <meshBasicMaterial color={ring.color} side={THREE.DoubleSide} transparent opacity={0.7} />
          </Ring>
        ))}
      </group>
    </group>
  )
}

interface SolarSystemProps {
  onFocus: (position: THREE.Vector3) => void
}

const SolarSystem: React.FC<SolarSystemProps> = ({ onFocus }) => {
  return (
    <group>
      <Sphere args={[SUN_RADIUS * AU, 32, 32]} onClick={() => onFocus(new THREE.Vector3(0, 0, 0))}>
        <meshBasicMaterial color="yellow" />
      </Sphere>
      <Text
        position={[0, SUN_RADIUS * AU * 1.2, 0]}
        fontSize={SUN_RADIUS * AU * 0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Sun
      </Text>
      
      {orbitalData.map((data) => (
        <CelestialBody key={data.label} data={data} onFocus={onFocus} />
      ))}

      {asteroidData.map((asteroid) => (
        <CelestialBody
          key={asteroid.label}
          data={{
            ...asteroid,
            inclination: 0,
            omega: 0,
            period: Math.sqrt(asteroid.sma ** 3) * 365.25,
            raan: 0,
            tau: 0,
          }}
          onFocus={onFocus}
        />
      ))}
    </group>
  )
}

export default SolarSystem