// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// factory function to create pAequor objects
// accepts specimenNum (unique identifier - type number) and a dna (array)
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      this.dna[Math.floor(Math.random() * this.dna.length)] = returnRandBase();
      return this.dna;
    },
    compareDNA(pAequor) {
      let dna1 = this.dna;
      let dna2 = pAequor.dna;
      let sameBaseCount = 0;

      for (let i = 0; i < dna1.length; i++){
        if (dna1[i] === dna2[i]){
          sameBaseCount ++;
        }
      }

      let percentCommon = sameBaseCount / dna1.length * 100;
      return `Specimen #1 and Specimen #2 have ${percentCommon}% DNA in common.`
    },
    willLikelySurvive() {
      let baseCount = this.dna.length;
      let countCG = 0;

      this.dna.forEach(base => {
        if (base === 'C' || base === 'G'){
          countCG ++;
        }
      });

      let percentCG = countCG / baseCount * 100;

      if (percentCG >= 60) {
        return true;
      } else {
        return false;
      }
    }
  };
}

let pAequorList = [];
for (let i = 0; i < 30; i++){
  pAequorList.push(pAequorFactory(i + 1, mockUpStrand()));
}