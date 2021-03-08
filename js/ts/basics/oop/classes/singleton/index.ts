class Snowflake {
  static instance: Snowflake;
  static getInstance() {
    if (!this.instance) {
      console.log('creating instance');
      this.instance = new Snowflake();
      return this.instance;
    } else {
      console.log('returning instance');
      return this.instance;
    }
  }
  private constructor() {}
}

const s1 = Snowflake.getInstance();
const s2 = Snowflake.getInstance();
const s3 = Snowflake.getInstance();
