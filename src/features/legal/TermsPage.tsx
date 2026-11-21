import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'
import { OWNER_EMAIL } from '@/lib/membership'

const ACTUALIZADO = '21 de noviembre de 2026'

function Section({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-[17px] font-semibold tracking-tight text-foreground">{titulo}</h2>
      <div className="mt-2.5 space-y-3 text-[14px] leading-relaxed text-muted-foreground">{children}</div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b bg-surface/90 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[13px] font-semibold tracking-tight">
            <Compass className="h-4.5 w-4.5 text-primary" /> Método Brújula
          </Link>
          <Link to="/" className="flex items-center gap-1.5 text-[12.5px] text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" /> Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-14">
        <p className="text-[12px] font-medium tracking-[0.14em] text-faint uppercase">Legal</p>
        <h1 className="mt-2 text-[28px] font-semibold tracking-tight">Términos y Condiciones</h1>
        <p className="mt-2 text-[13px] text-faint">Última actualización: {ACTUALIZADO}</p>

        <Section titulo="1. Quiénes somos">
          <p>
            Método Brújula es una plataforma de gestión para profesionales de orientación vocacional y ocupacional,
            operada por la <strong className="text-foreground">Lic. Irene Morbidelli</strong>, Psicopedagoga (M.P.
            260505), monotributista. Al crear una cuenta, aceptás estos Términos y la{' '}
            <Link to="/privacidad" className="text-primary hover:underline">
              Política de Privacidad
            </Link>
            .
          </p>
        </Section>

        <Section titulo="2. Quién puede usar la plataforma">
          <p>
            Las cuentas profesionales están destinadas a psicopedagogas, psicopedagogos y otros profesionales que
            acompañen procesos de orientación vocacional y ocupacional. Las cuentas de consultante se crean por
            invitación de su profesional, o mediante autorregistro con un link personal que esa profesional
            comparte.
          </p>
        </Section>

        <Section titulo="3. Membresía y pagos">
          <p>
            El acceso profesional es mediante una membresía anual e individual. El alta y la renovación se gestionan
            directamente con la titular de la plataforma — no hay cobro automático con tarjeta ni plataforma de
            pagos de terceros. Si una membresía no se renueva, el acceso se suspende pero los datos cargados quedan
            resguardados.
          </p>
        </Section>

        <Section titulo="4. Uso de la cuenta">
          <p>
            Cada cuenta profesional es de uso personal e intransferible, para la práctica profesional individual de
            quien se registra. Compartir el acceso con otra persona puede implicar el corte del servicio, sin
            reembolso.
          </p>
        </Section>

        <Section titulo="5. Alcance de la herramienta">
          <p>
            Método Brújula ordena el proceso de orientación y entrega información (respuestas a actividades, notas,
            resultados) de forma clara, pero{' '}
            <strong className="text-foreground">no reemplaza el criterio clínico de la profesional</strong>. Los
            cuestionarios y tests incluidos son de elaboración propia, pensados para orientar la exploración de
            intereses, aptitudes y valores:{' '}
            <strong className="text-foreground">no son instrumentos validados psicométricamente</strong> como un
            test estandarizado, ni se presentan como tales.
          </p>
        </Section>

        <Section titulo="6. Responsabilidad profesional">
          <p>
            El uso clínico de la información generada por la plataforma, así como las decisiones y devoluciones que
            se compartan con cada consultante, son exclusiva responsabilidad de la profesional matriculada que lleva
            adelante el proceso.
          </p>
        </Section>

        <Section titulo="7. Propiedad intelectual">
          <p>
            El método, sus contenidos (módulos, actividades, cuestionarios, materiales) y el software de la
            plataforma son propiedad de la Lic. Irene Morbidelli. El acceso mediante membresía otorga una licencia
            de uso personal; queda prohibida su reproducción, distribución o reventa sin autorización expresa.
          </p>
        </Section>

        <Section titulo="8. Disponibilidad del servicio">
          <p>
            Se procura la continuidad del servicio, pero no se garantiza una disponibilidad del 100%, dado que la
            plataforma depende de infraestructura de terceros (Supabase, Vercel) fuera de nuestro control directo.
          </p>
        </Section>

        <Section titulo="9. Cambios a estos términos">
          <p>
            Estos Términos pueden actualizarse para reflejar cambios en la plataforma o en la normativa vigente. Los
            cambios importantes se comunican a las profesionales con cuenta activa.
          </p>
        </Section>

        <Section titulo="10. Ley aplicable">
          <p>
            Estos Términos se rigen por las leyes de la República Argentina. Ante cualquier consulta, escribí a{' '}
            <a href={`mailto:${OWNER_EMAIL}`} className="text-primary hover:underline">
              {OWNER_EMAIL}
            </a>
            .
          </p>
        </Section>
      </main>
    </div>
  )
}
