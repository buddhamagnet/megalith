provider "aws" {
  region = "eu-west-2"
}

terraform {
  backend "s3" {
    bucket     = "terraform-buddhamagnet"
    key        = "terraform/tfstate.tfstate"
    region     = "eu-west-2"
    access_key = ""
    secret_key = ""
  }
}

module "vpc" {
  source          = "terraform-aws-modules/vpc/aws"
  version         = "2.44.0"
  cidr            = "10.0.0.0/16"
  azs             = ["eu-west-2a", "eu-west-2b", "eu-west-2c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  enable_vpn_gateway = true
}

output "module_output" {
  value = module.vpc.vpc_id
}
