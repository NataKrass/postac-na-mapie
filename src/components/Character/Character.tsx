export const Character = ({ name, color }: any) => (
  <div className="character-display" style={{ color }}>
    <div className="character-display__name">
      {name}
    </div>
    <div className="character-display__dot" style={{ backgroundColor: color }} />
  </div>
)