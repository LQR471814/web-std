import argparse
from os import listdir
from subprocess import call

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="setup all the repos")
    parser.add_argument(
        "--package-manager", default="pnpm",
        help="the package manager command (default: pnpm)"
    )
    args = parser.parse_args()

    for package in listdir("packages"):
        call(
            f"{args.package_manager} install",
            shell=True, cwd=f"packages/{package}"
        )
