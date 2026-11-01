import SplitText from '@/components/SplitText'

// Sidecar test bed for React Bits components. The live site is the static
// HTML in the parent folder; build effects here, then mount them into it.
export default function App() {
  return (
    <main className="p-10">
      <SplitText
        text="Bellows and expansion joints, made in Chennai."
        tag="h1"
        className="text-5xl font-bold"
        splitType="words"
      />
    </main>
  )
}
