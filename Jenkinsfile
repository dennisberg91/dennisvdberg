pipeline {
  agent any
  stages {
    stage('SCM') {
      steps {
        echo 'Pulling for git'
        git(url: 'https://github.com/dennisberg91/dennisvdberg.git', branch: 'master', poll: true, changelog: true, credentialsId: '	0371ee40-8e0b-4685-8a6b-a68404b69126')
      }
    }

    stage('INSTALL') {
      parallel {
        stage('Current') {
          steps {
            echo 'Dependencies'
          }
        }

        stage('Npm') {
          steps {
            sh '''rm -rf ./node_modules
npm install --cache /tmp/empty-cache'''
          }
        }

      }
    }

    stage('BUILD') {
      parallel {
        stage('Current') {
          steps {
            echo 'Building project'
          }
        }

        stage('Npm') {
          steps {
            sh 'npm run-script build'
          }
        }

      }
    }

    stage('TEST') {
      parallel {
        stage('Current') {
          steps {
            echo 'Starting tests'
          }
        }

        stage('Cypress') {
          steps {
            sh 'npx cypress run'
          }
        }

      }
    }

    stage('DEPLOY') {
      parallel {
        stage('DEPLOY') {
          steps {
            echo 'Deploy code'
          }
        }

        stage('Rsync') {
          steps {
            sh '''rsync -av --delete /var/lib/jenkins/workspace/dennisvdberg.nl_master/dist/dennisvdberg/ /var/www/dennisvdberg/
'''
          }
        }

        stage('Jira') {
          steps {
            jiraSendBuildInfo(branch: 'master', site: 'dennisvdberg')
          }
        }

      }
    }

  }
  tools {
    nodejs 'npm'
  }
}