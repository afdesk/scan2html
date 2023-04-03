const testData = {
	"SchemaVersion": 2,
	"ArtifactName": "/home/maksim/work/scan2html/test/resources/vulnSource",
	"ArtifactType": "filesystem",
	"Metadata": {
		"ImageConfig": {
			"architecture": "",
			"created": "0001-01-01T00:00:00Z",
			"os": "",
			"rootfs": {
				"type": "",
				"diff_ids": null
			},
			"config": {}
		}
	},
	"Results": [
		{
			"Target": "go.mod",
			"Class": "lang-pkgs",
			"Type": "gomod",
			"Packages": [
				{
					"ID": "4d63.com/gochecknoglobals@v0.1.0",
					"Name": "4d63.com/gochecknoglobals",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "bazil.org/fuse@v0.0.0-20200407214033-5883e5a4b512",
					"Name": "bazil.org/fuse",
					"Version": "0.0.0-20200407214033-5883e5a4b512",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "bitbucket.org/creachadair/shell@v0.0.7",
					"Name": "bitbucket.org/creachadair/shell",
					"Version": "0.0.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go@v0.105.0",
					"Name": "cloud.google.com/go",
					"Version": "0.105.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"google.golang.org/protobuf@v1.28.1",
						"cloud.google.com/go/storage@v1.27.0",
						"github.com/google/martian/v3@v3.3.2",
						"golang.org/x/oauth2@v0.1.0",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/google/go-cmp@v0.5.9",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
						"google.golang.org/api@v0.107.0",
						"google.golang.org/grpc@v1.52.0",
						"cloud.google.com/go/compute@v1.14.0",
						"github.com/googleapis/gax-go/v2@v2.7.0",
						"go.opencensus.io@v0.24.0"
					],
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/accessapproval@v1.5.0",
					"Name": "cloud.google.com/go/accessapproval",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/accesscontextmanager@v1.4.0",
					"Name": "cloud.google.com/go/accesscontextmanager",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/aiplatform@v1.27.0",
					"Name": "cloud.google.com/go/aiplatform",
					"Version": "1.27.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/analytics@v0.12.0",
					"Name": "cloud.google.com/go/analytics",
					"Version": "0.12.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/apigateway@v1.4.0",
					"Name": "cloud.google.com/go/apigateway",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/apigeeconnect@v1.4.0",
					"Name": "cloud.google.com/go/apigeeconnect",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/appengine@v1.5.0",
					"Name": "cloud.google.com/go/appengine",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/area120@v0.6.0",
					"Name": "cloud.google.com/go/area120",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/artifactregistry@v1.9.0",
					"Name": "cloud.google.com/go/artifactregistry",
					"Version": "1.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/asset@v1.10.0",
					"Name": "cloud.google.com/go/asset",
					"Version": "1.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/assuredworkloads@v1.9.0",
					"Name": "cloud.google.com/go/assuredworkloads",
					"Version": "1.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/automl@v1.8.0",
					"Name": "cloud.google.com/go/automl",
					"Version": "1.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/baremetalsolution@v0.4.0",
					"Name": "cloud.google.com/go/baremetalsolution",
					"Version": "0.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/batch@v0.4.0",
					"Name": "cloud.google.com/go/batch",
					"Version": "0.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/beyondcorp@v0.3.0",
					"Name": "cloud.google.com/go/beyondcorp",
					"Version": "0.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/bigquery@v1.44.0",
					"Name": "cloud.google.com/go/bigquery",
					"Version": "1.44.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/billing@v1.7.0",
					"Name": "cloud.google.com/go/billing",
					"Version": "1.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/binaryauthorization@v1.4.0",
					"Name": "cloud.google.com/go/binaryauthorization",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/certificatemanager@v1.4.0",
					"Name": "cloud.google.com/go/certificatemanager",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/channel@v1.9.0",
					"Name": "cloud.google.com/go/channel",
					"Version": "1.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/cloudbuild@v1.4.0",
					"Name": "cloud.google.com/go/cloudbuild",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/clouddms@v1.4.0",
					"Name": "cloud.google.com/go/clouddms",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/cloudtasks@v1.8.0",
					"Name": "cloud.google.com/go/cloudtasks",
					"Version": "1.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/compute@v1.14.0",
					"Name": "cloud.google.com/go/compute",
					"Version": "1.14.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"google.golang.org/api@v0.107.0",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
						"google.golang.org/grpc@v1.52.0",
						"google.golang.org/protobuf@v1.28.1",
						"github.com/googleapis/gax-go/v2@v2.7.0",
						"cloud.google.com/go@v0.105.0"
					],
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/compute/metadata@v0.2.3",
					"Name": "cloud.google.com/go/compute/metadata",
					"Version": "0.2.3",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"cloud.google.com/go/compute@v1.14.0"
					],
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/contactcenterinsights@v1.4.0",
					"Name": "cloud.google.com/go/contactcenterinsights",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/container@v1.7.0",
					"Name": "cloud.google.com/go/container",
					"Version": "1.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/containeranalysis@v0.6.0",
					"Name": "cloud.google.com/go/containeranalysis",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/datacatalog@v1.8.0",
					"Name": "cloud.google.com/go/datacatalog",
					"Version": "1.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/dataflow@v0.7.0",
					"Name": "cloud.google.com/go/dataflow",
					"Version": "0.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/dataform@v0.5.0",
					"Name": "cloud.google.com/go/dataform",
					"Version": "0.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/datafusion@v1.5.0",
					"Name": "cloud.google.com/go/datafusion",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/datalabeling@v0.6.0",
					"Name": "cloud.google.com/go/datalabeling",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/dataplex@v1.4.0",
					"Name": "cloud.google.com/go/dataplex",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/dataproc@v1.8.0",
					"Name": "cloud.google.com/go/dataproc",
					"Version": "1.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/dataqna@v0.6.0",
					"Name": "cloud.google.com/go/dataqna",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/datastore@v1.10.0",
					"Name": "cloud.google.com/go/datastore",
					"Version": "1.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/datastream@v1.5.0",
					"Name": "cloud.google.com/go/datastream",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/deploy@v1.5.0",
					"Name": "cloud.google.com/go/deploy",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/dialogflow@v1.19.0",
					"Name": "cloud.google.com/go/dialogflow",
					"Version": "1.19.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/dlp@v1.7.0",
					"Name": "cloud.google.com/go/dlp",
					"Version": "1.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/documentai@v1.10.0",
					"Name": "cloud.google.com/go/documentai",
					"Version": "1.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/domains@v0.7.0",
					"Name": "cloud.google.com/go/domains",
					"Version": "0.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/edgecontainer@v0.2.0",
					"Name": "cloud.google.com/go/edgecontainer",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/errorreporting@v0.3.0",
					"Name": "cloud.google.com/go/errorreporting",
					"Version": "0.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/essentialcontacts@v1.4.0",
					"Name": "cloud.google.com/go/essentialcontacts",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/eventarc@v1.8.0",
					"Name": "cloud.google.com/go/eventarc",
					"Version": "1.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/filestore@v1.4.0",
					"Name": "cloud.google.com/go/filestore",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/firestore@v1.9.0",
					"Name": "cloud.google.com/go/firestore",
					"Version": "1.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/functions@v1.9.0",
					"Name": "cloud.google.com/go/functions",
					"Version": "1.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/gaming@v1.8.0",
					"Name": "cloud.google.com/go/gaming",
					"Version": "1.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/gkebackup@v0.3.0",
					"Name": "cloud.google.com/go/gkebackup",
					"Version": "0.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/gkeconnect@v0.6.0",
					"Name": "cloud.google.com/go/gkeconnect",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/gkehub@v0.10.0",
					"Name": "cloud.google.com/go/gkehub",
					"Version": "0.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/gkemulticloud@v0.4.0",
					"Name": "cloud.google.com/go/gkemulticloud",
					"Version": "0.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/grafeas@v0.2.0",
					"Name": "cloud.google.com/go/grafeas",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/gsuiteaddons@v1.4.0",
					"Name": "cloud.google.com/go/gsuiteaddons",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/iam@v0.8.0",
					"Name": "cloud.google.com/go/iam",
					"Version": "0.8.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"google.golang.org/grpc@v1.52.0",
						"google.golang.org/protobuf@v1.28.1",
						"cloud.google.com/go@v0.105.0",
						"github.com/googleapis/gax-go/v2@v2.7.0",
						"cloud.google.com/go/longrunning@v0.3.0",
						"github.com/golang/protobuf@v1.5.2",
						"google.golang.org/api@v0.107.0",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef"
					],
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/iap@v1.5.0",
					"Name": "cloud.google.com/go/iap",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/ids@v1.2.0",
					"Name": "cloud.google.com/go/ids",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/iot@v1.4.0",
					"Name": "cloud.google.com/go/iot",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/kms@v1.6.0",
					"Name": "cloud.google.com/go/kms",
					"Version": "1.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/language@v1.8.0",
					"Name": "cloud.google.com/go/language",
					"Version": "1.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/lifesciences@v0.6.0",
					"Name": "cloud.google.com/go/lifesciences",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/logging@v1.6.1",
					"Name": "cloud.google.com/go/logging",
					"Version": "1.6.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/longrunning@v0.3.0",
					"Name": "cloud.google.com/go/longrunning",
					"Version": "0.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/managedidentities@v1.4.0",
					"Name": "cloud.google.com/go/managedidentities",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/maps@v0.1.0",
					"Name": "cloud.google.com/go/maps",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/mediatranslation@v0.6.0",
					"Name": "cloud.google.com/go/mediatranslation",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/memcache@v1.7.0",
					"Name": "cloud.google.com/go/memcache",
					"Version": "1.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/metastore@v1.8.0",
					"Name": "cloud.google.com/go/metastore",
					"Version": "1.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/monitoring@v1.8.0",
					"Name": "cloud.google.com/go/monitoring",
					"Version": "1.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/networkconnectivity@v1.7.0",
					"Name": "cloud.google.com/go/networkconnectivity",
					"Version": "1.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/networkmanagement@v1.5.0",
					"Name": "cloud.google.com/go/networkmanagement",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/networksecurity@v0.6.0",
					"Name": "cloud.google.com/go/networksecurity",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/notebooks@v1.5.0",
					"Name": "cloud.google.com/go/notebooks",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/optimization@v1.2.0",
					"Name": "cloud.google.com/go/optimization",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/orchestration@v1.4.0",
					"Name": "cloud.google.com/go/orchestration",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/orgpolicy@v1.5.0",
					"Name": "cloud.google.com/go/orgpolicy",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/osconfig@v1.10.0",
					"Name": "cloud.google.com/go/osconfig",
					"Version": "1.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/oslogin@v1.7.0",
					"Name": "cloud.google.com/go/oslogin",
					"Version": "1.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/phishingprotection@v0.6.0",
					"Name": "cloud.google.com/go/phishingprotection",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/policytroubleshooter@v1.4.0",
					"Name": "cloud.google.com/go/policytroubleshooter",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/privatecatalog@v0.6.0",
					"Name": "cloud.google.com/go/privatecatalog",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/pubsub@v1.27.1",
					"Name": "cloud.google.com/go/pubsub",
					"Version": "1.27.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/pubsublite@v1.5.0",
					"Name": "cloud.google.com/go/pubsublite",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/recaptchaenterprise@v1.3.1",
					"Name": "cloud.google.com/go/recaptchaenterprise",
					"Version": "1.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/recaptchaenterprise/v2@v2.5.0",
					"Name": "cloud.google.com/go/recaptchaenterprise/v2",
					"Version": "2.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/recommendationengine@v0.6.0",
					"Name": "cloud.google.com/go/recommendationengine",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/recommender@v1.8.0",
					"Name": "cloud.google.com/go/recommender",
					"Version": "1.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/redis@v1.10.0",
					"Name": "cloud.google.com/go/redis",
					"Version": "1.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/resourcemanager@v1.4.0",
					"Name": "cloud.google.com/go/resourcemanager",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/resourcesettings@v1.4.0",
					"Name": "cloud.google.com/go/resourcesettings",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/retail@v1.11.0",
					"Name": "cloud.google.com/go/retail",
					"Version": "1.11.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/run@v0.3.0",
					"Name": "cloud.google.com/go/run",
					"Version": "0.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/scheduler@v1.7.0",
					"Name": "cloud.google.com/go/scheduler",
					"Version": "1.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/secretmanager@v1.9.0",
					"Name": "cloud.google.com/go/secretmanager",
					"Version": "1.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/security@v1.10.0",
					"Name": "cloud.google.com/go/security",
					"Version": "1.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/securitycenter@v1.16.0",
					"Name": "cloud.google.com/go/securitycenter",
					"Version": "1.16.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/servicecontrol@v1.5.0",
					"Name": "cloud.google.com/go/servicecontrol",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/servicedirectory@v1.7.0",
					"Name": "cloud.google.com/go/servicedirectory",
					"Version": "1.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/servicemanagement@v1.5.0",
					"Name": "cloud.google.com/go/servicemanagement",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/serviceusage@v1.4.0",
					"Name": "cloud.google.com/go/serviceusage",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/shell@v1.4.0",
					"Name": "cloud.google.com/go/shell",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/spanner@v1.41.0",
					"Name": "cloud.google.com/go/spanner",
					"Version": "1.41.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/speech@v1.9.0",
					"Name": "cloud.google.com/go/speech",
					"Version": "1.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/storage@v1.27.0",
					"Name": "cloud.google.com/go/storage",
					"Version": "1.27.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/googleapis/gax-go/v2@v2.7.0",
						"github.com/golang/protobuf@v1.5.2",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
						"google.golang.org/api@v0.107.0",
						"cloud.google.com/go/iam@v0.8.0",
						"google.golang.org/protobuf@v1.28.1",
						"github.com/google/uuid@v1.3.0",
						"cloud.google.com/go/compute@v1.14.0",
						"github.com/google/go-cmp@v0.5.9",
						"golang.org/x/oauth2@v0.1.0",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
						"google.golang.org/grpc@v1.52.0",
						"cloud.google.com/go@v0.105.0"
					],
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/storagetransfer@v1.6.0",
					"Name": "cloud.google.com/go/storagetransfer",
					"Version": "1.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/talent@v1.4.0",
					"Name": "cloud.google.com/go/talent",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/texttospeech@v1.5.0",
					"Name": "cloud.google.com/go/texttospeech",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/tpu@v1.4.0",
					"Name": "cloud.google.com/go/tpu",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/trace@v1.4.0",
					"Name": "cloud.google.com/go/trace",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/translate@v1.4.0",
					"Name": "cloud.google.com/go/translate",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/video@v1.9.0",
					"Name": "cloud.google.com/go/video",
					"Version": "1.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/videointelligence@v1.9.0",
					"Name": "cloud.google.com/go/videointelligence",
					"Version": "1.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/vision@v1.2.0",
					"Name": "cloud.google.com/go/vision",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/vision/v2@v2.5.0",
					"Name": "cloud.google.com/go/vision/v2",
					"Version": "2.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/vmmigration@v1.3.0",
					"Name": "cloud.google.com/go/vmmigration",
					"Version": "1.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/vmwareengine@v0.1.0",
					"Name": "cloud.google.com/go/vmwareengine",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/vpcaccess@v1.5.0",
					"Name": "cloud.google.com/go/vpcaccess",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/webrisk@v1.7.0",
					"Name": "cloud.google.com/go/webrisk",
					"Version": "1.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/websecurityscanner@v1.4.0",
					"Name": "cloud.google.com/go/websecurityscanner",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "cloud.google.com/go/workflows@v1.9.0",
					"Name": "cloud.google.com/go/workflows",
					"Version": "1.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "code.gitea.io/sdk/gitea@v0.12.0",
					"Name": "code.gitea.io/sdk/gitea",
					"Version": "0.12.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "contrib.go.opencensus.io/exporter/aws@v0.0.0-20200617204711-c478e41e60e9",
					"Name": "contrib.go.opencensus.io/exporter/aws",
					"Version": "0.0.0-20200617204711-c478e41e60e9",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "contrib.go.opencensus.io/exporter/ocagent@v0.5.0",
					"Name": "contrib.go.opencensus.io/exporter/ocagent",
					"Version": "0.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "contrib.go.opencensus.io/exporter/stackdriver@v0.13.12",
					"Name": "contrib.go.opencensus.io/exporter/stackdriver",
					"Version": "0.13.12",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "contrib.go.opencensus.io/integrations/ocsql@v0.1.7",
					"Name": "contrib.go.opencensus.io/integrations/ocsql",
					"Version": "0.1.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "contrib.go.opencensus.io/resource@v0.1.1",
					"Name": "contrib.go.opencensus.io/resource",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "dmitri.shuralyov.com/gpu/mtl@v0.0.0-20190408044501-666a987793e9",
					"Name": "dmitri.shuralyov.com/gpu/mtl",
					"Version": "0.0.0-20190408044501-666a987793e9",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "filippo.io/edwards25519@v1.0.0",
					"Name": "filippo.io/edwards25519",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "git.apache.org/thrift.git@v0.12.0",
					"Name": "git.apache.org/thrift.git",
					"Version": "0.12.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/AdaLogics/go-fuzz-headers@v0.0.0-20210715213245-6c3934b029d8",
					"Name": "github.com/AdaLogics/go-fuzz-headers",
					"Version": "0.0.0-20210715213245-6c3934b029d8",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/AkihiroSuda/containerd-fuse-overlayfs@v1.0.0",
					"Name": "github.com/AkihiroSuda/containerd-fuse-overlayfs",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Antonboom/errname@v0.1.5",
					"Name": "github.com/Antonboom/errname",
					"Version": "0.1.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Antonboom/nilnil@v0.1.0",
					"Name": "github.com/Antonboom/nilnil",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/azure-amqp-common-go/v2@v2.1.0",
					"Name": "github.com/Azure/azure-amqp-common-go/v2",
					"Version": "2.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/azure-amqp-common-go/v3@v3.2.2",
					"Name": "github.com/Azure/azure-amqp-common-go/v3",
					"Version": "3.2.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/azure-pipeline-go@v0.2.3",
					"Name": "github.com/Azure/azure-pipeline-go",
					"Version": "0.2.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/azure-sdk-for-go@v67.1.0+incompatible",
					"Name": "github.com/Azure/azure-sdk-for-go",
					"Version": "67.1.0+incompatible",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/azure-sdk-for-go/sdk/azcore@v1.1.0",
					"Name": "github.com/Azure/azure-sdk-for-go/sdk/azcore",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/azure-sdk-for-go/sdk/azidentity@v1.1.0",
					"Name": "github.com/Azure/azure-sdk-for-go/sdk/azidentity",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/azure-sdk-for-go/sdk/internal@v1.0.0",
					"Name": "github.com/Azure/azure-sdk-for-go/sdk/internal",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/azure-sdk-for-go/sdk/storage/azblob@v0.4.1",
					"Name": "github.com/Azure/azure-sdk-for-go/sdk/storage/azblob",
					"Version": "0.4.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/azure-service-bus-go@v0.11.5",
					"Name": "github.com/Azure/azure-service-bus-go",
					"Version": "0.11.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/azure-storage-blob-go@v0.14.0",
					"Name": "github.com/Azure/azure-storage-blob-go",
					"Version": "0.14.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-amqp@v0.16.4",
					"Name": "github.com/Azure/go-amqp",
					"Version": "0.16.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-ansiterm@v0.0.0-20210617225240-d185dfc1b5a1",
					"Name": "github.com/Azure/go-ansiterm",
					"Version": "0.0.0-20210617225240-d185dfc1b5a1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-autorest@v14.2.0+incompatible",
					"Name": "github.com/Azure/go-autorest",
					"Version": "14.2.0+incompatible",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-autorest/autorest@v0.11.28",
					"Name": "github.com/Azure/go-autorest/autorest",
					"Version": "0.11.28",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/Azure/go-autorest@v14.2.0+incompatible",
						"github.com/Azure/go-autorest/autorest/adal@v0.9.21",
						"github.com/Azure/go-autorest/autorest/mocks@v0.4.2",
						"github.com/Azure/go-autorest/logger@v0.2.1",
						"github.com/Azure/go-autorest/tracing@v0.6.0",
						"golang.org/x/crypto@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-autorest/autorest/adal@v0.9.21",
					"Name": "github.com/Azure/go-autorest/autorest/adal",
					"Version": "0.9.21",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/Azure/go-autorest/logger@v0.2.1",
						"github.com/Azure/go-autorest/tracing@v0.6.0",
						"github.com/golang-jwt/jwt/v4@v4.4.2",
						"golang.org/x/crypto@v0.5.0",
						"github.com/Azure/go-autorest@v14.2.0+incompatible",
						"github.com/Azure/go-autorest/autorest/date@v0.3.0",
						"github.com/Azure/go-autorest/autorest/mocks@v0.4.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-autorest/autorest/azure/auth@v0.5.11",
					"Name": "github.com/Azure/go-autorest/autorest/azure/auth",
					"Version": "0.5.11",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/Azure/go-autorest/autorest/azure/cli@v0.4.6",
						"github.com/Azure/go-autorest/logger@v0.2.1",
						"github.com/dimchansky/utfbom@v1.1.1",
						"github.com/Azure/go-autorest@v14.2.0+incompatible",
						"github.com/Azure/go-autorest/autorest@v0.11.28",
						"github.com/Azure/go-autorest/autorest/adal@v0.9.21"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-autorest/autorest/azure/cli@v0.4.6",
					"Name": "github.com/Azure/go-autorest/autorest/azure/cli",
					"Version": "0.4.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-autorest/autorest/date@v0.3.0",
					"Name": "github.com/Azure/go-autorest/autorest/date",
					"Version": "0.3.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/Azure/go-autorest@v14.2.0+incompatible"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-autorest/autorest/mocks@v0.4.2",
					"Name": "github.com/Azure/go-autorest/autorest/mocks",
					"Version": "0.4.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/Azure/go-autorest@v14.2.0+incompatible"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-autorest/autorest/to@v0.4.0",
					"Name": "github.com/Azure/go-autorest/autorest/to",
					"Version": "0.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-autorest/autorest/validation@v0.3.1",
					"Name": "github.com/Azure/go-autorest/autorest/validation",
					"Version": "0.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-autorest/logger@v0.2.1",
					"Name": "github.com/Azure/go-autorest/logger",
					"Version": "0.2.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/Azure/go-autorest@v14.2.0+incompatible"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/Azure/go-autorest/tracing@v0.6.0",
					"Name": "github.com/Azure/go-autorest/tracing",
					"Version": "0.6.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/Azure/go-autorest@v14.2.0+incompatible"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/AzureAD/microsoft-authentication-library-for-go@v0.6.0",
					"Name": "github.com/AzureAD/microsoft-authentication-library-for-go",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/BurntSushi/toml@v1.2.1",
					"Name": "github.com/BurntSushi/toml",
					"Version": "1.2.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/BurntSushi/xgb@v0.0.0-20160522181843-27f122750802",
					"Name": "github.com/BurntSushi/xgb",
					"Version": "0.0.0-20160522181843-27f122750802",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/CycloneDX/cyclonedx-go@v0.7.0",
					"Name": "github.com/CycloneDX/cyclonedx-go",
					"Version": "0.7.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/bradleyjkemp/cupaloy/v2@v2.8.0",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/DATA-DOG/go-sqlmock@v1.5.0",
					"Name": "github.com/DATA-DOG/go-sqlmock",
					"Version": "1.5.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/DataDog/datadog-go@v3.2.0+incompatible",
					"Name": "github.com/DataDog/datadog-go",
					"Version": "3.2.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/DataDog/zstd@v1.5.2",
					"Name": "github.com/DataDog/zstd",
					"Version": "1.5.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Djarvur/go-err113@v0.1.0",
					"Name": "github.com/Djarvur/go-err113",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/GoogleCloudPlatform/cloudsql-proxy@v1.27.0",
					"Name": "github.com/GoogleCloudPlatform/cloudsql-proxy",
					"Version": "1.27.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/GoogleCloudPlatform/docker-credential-gcr@v2.0.5+incompatible",
					"Name": "github.com/GoogleCloudPlatform/docker-credential-gcr",
					"Version": "2.0.5+incompatible",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/GoogleCloudPlatform/k8s-cloud-provider@v0.0.0-20190822182118-27a4ced34534",
					"Name": "github.com/GoogleCloudPlatform/k8s-cloud-provider",
					"Version": "0.0.0-20190822182118-27a4ced34534",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/KarpelesLab/reflink@v0.0.2",
					"Name": "github.com/KarpelesLab/reflink",
					"Version": "0.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/MakeNowJust/heredoc@v1.0.0",
					"Name": "github.com/MakeNowJust/heredoc",
					"Version": "1.0.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Masterminds/goutils@v1.1.1",
					"Name": "github.com/Masterminds/goutils",
					"Version": "1.1.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Masterminds/semver@v1.5.0",
					"Name": "github.com/Masterminds/semver",
					"Version": "1.5.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Masterminds/semver/v3@v3.2.0",
					"Name": "github.com/Masterminds/semver/v3",
					"Version": "3.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Masterminds/sprig@v2.22.0+incompatible",
					"Name": "github.com/Masterminds/sprig",
					"Version": "2.22.0+incompatible",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Masterminds/sprig/v3@v3.2.3",
					"Name": "github.com/Masterminds/sprig/v3",
					"Version": "3.2.3",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/Masterminds/goutils@v1.1.1",
						"github.com/Masterminds/semver/v3@v3.2.0",
						"github.com/google/uuid@v1.3.0",
						"github.com/huandu/xstrings@v1.3.3",
						"github.com/mitchellh/copystructure@v1.2.0",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/imdario/mergo@v0.3.13",
						"github.com/shopspring/decimal@v1.2.0",
						"github.com/spf13/cast@v1.5.0",
						"golang.org/x/crypto@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/Masterminds/squirrel@v1.5.3",
					"Name": "github.com/Masterminds/squirrel",
					"Version": "1.5.3",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/lann/builder@v0.0.0-20180802200727-47ae307949d0",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/Masterminds/vcs@v1.13.3",
					"Name": "github.com/Masterminds/vcs",
					"Version": "1.13.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Microsoft/go-winio@v0.6.0",
					"Name": "github.com/Microsoft/go-winio",
					"Version": "0.6.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/sirupsen/logrus@v1.9.0",
						"golang.org/x/sys@v0.5.0",
						"golang.org/x/tools@v0.2.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/Microsoft/hcsshim@v0.9.6",
					"Name": "github.com/Microsoft/hcsshim",
					"Version": "0.9.6",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/Microsoft/go-winio@v0.6.0",
						"github.com/containerd/cgroups@v1.0.4",
						"github.com/urfave/cli@v1.22.7",
						"github.com/golang/mock@v1.6.0",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/pkg/errors@v0.9.1",
						"google.golang.org/grpc@v1.52.0",
						"github.com/google/go-containerregistry@v0.12.0",
						"github.com/opencontainers/runc@v1.1.3",
						"go.etcd.io/bbolt@v1.3.6",
						"golang.org/x/sync@v0.1.0",
						"github.com/containerd/go-runc@v1.0.0",
						"github.com/containerd/ttrpc@v1.1.1-0.20220420014843-944ef4a40df3",
						"github.com/opencontainers/runtime-spec@v1.0.3-0.20220311020903-6969a0a09ab1",
						"github.com/vishvananda/netlink@v1.1.1-0.20210330154013-f5de75959ad5",
						"golang.org/x/sys@v0.5.0",
						"github.com/BurntSushi/toml@v1.2.1",
						"github.com/cenkalti/backoff/v4@v4.2.0",
						"github.com/gogo/protobuf@v1.3.2",
						"github.com/mattn/go-shellwords@v1.0.12",
						"github.com/sirupsen/logrus@v1.9.0",
						"go.opencensus.io@v0.24.0",
						"github.com/containerd/containerd@v1.6.18",
						"github.com/linuxkit/virtsock@v0.0.0-20201010232012-f8cee7dfc7a3",
						"github.com/containerd/console@v1.0.3",
						"github.com/vishvananda/netns@v0.0.0-20210104183010-2eb08e3e575f",
						"github.com/containerd/typeurl@v1.0.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/Microsoft/hcsshim/test@v0.0.0-20210227013316-43a75bb4edd3",
					"Name": "github.com/Microsoft/hcsshim/test",
					"Version": "0.0.0-20210227013316-43a75bb4edd3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/NYTimes/gziphandler@v1.1.1",
					"Name": "github.com/NYTimes/gziphandler",
					"Version": "1.1.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/OneOfOne/xxhash@v1.2.8",
					"Name": "github.com/OneOfOne/xxhash",
					"Version": "1.2.8",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/OpenPeeDeeP/depguard@v1.0.1",
					"Name": "github.com/OpenPeeDeeP/depguard",
					"Version": "1.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ProtonMail/go-crypto@v0.0.0-20221026131551-cf6655e29de4",
					"Name": "github.com/ProtonMail/go-crypto",
					"Version": "0.0.0-20221026131551-cf6655e29de4",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/crypto@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/PuerkitoBio/goquery@v1.5.1",
					"Name": "github.com/PuerkitoBio/goquery",
					"Version": "1.5.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/PuerkitoBio/purell@v1.1.1",
					"Name": "github.com/PuerkitoBio/purell",
					"Version": "1.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/PuerkitoBio/urlesc@v0.0.0-20170810143723-de5bf2ad4578",
					"Name": "github.com/PuerkitoBio/urlesc",
					"Version": "0.0.0-20170810143723-de5bf2ad4578",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Shopify/logrus-bugsnag@v0.0.0-20171204204709-577dee27f20d",
					"Name": "github.com/Shopify/logrus-bugsnag",
					"Version": "0.0.0-20171204204709-577dee27f20d",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Shopify/sarama@v1.19.0",
					"Name": "github.com/Shopify/sarama",
					"Version": "1.19.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/Shopify/toxiproxy@v2.1.4+incompatible",
					"Name": "github.com/Shopify/toxiproxy",
					"Version": "2.1.4+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/StackExchange/wmi@v1.2.1",
					"Name": "github.com/StackExchange/wmi",
					"Version": "1.2.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ThalesIgnite/crypto11@v1.2.5",
					"Name": "github.com/ThalesIgnite/crypto11",
					"Version": "1.2.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/VividCortex/ewma@v1.1.1",
					"Name": "github.com/VividCortex/ewma",
					"Version": "1.1.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/acomagu/bufpipe@v1.0.3",
					"Name": "github.com/acomagu/bufpipe",
					"Version": "1.0.3",
					"Indirect": true,
					"DependsOn": [
						"github.com/matryer/is@v1.4.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/agext/levenshtein@v1.2.3",
					"Name": "github.com/agext/levenshtein",
					"Version": "1.2.3",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/agnivade/levenshtein@v1.1.1",
					"Name": "github.com/agnivade/levenshtein",
					"Version": "1.1.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/arbovm/levenshtein@v0.0.0-20160628152529-48b4e1c0c4d0",
						"github.com/dgryski/trifles@v0.0.0-20200323201526-dd97f9abfb48"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/ajstarks/svgo@v0.0.0-20180226025133-644b8db467af",
					"Name": "github.com/ajstarks/svgo",
					"Version": "0.0.0-20180226025133-644b8db467af",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/alcortesm/tgz@v0.0.0-20161220082320-9c5fe88206d7",
					"Name": "github.com/alcortesm/tgz",
					"Version": "0.0.0-20161220082320-9c5fe88206d7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/alecthomas/chroma@v0.10.0",
					"Name": "github.com/alecthomas/chroma",
					"Version": "0.10.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/dlclark/regexp2@v1.4.0",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/alecthomas/kingpin@v2.2.6+incompatible",
					"Name": "github.com/alecthomas/kingpin",
					"Version": "2.2.6+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/alecthomas/template@v0.0.0-20190718012654-fb15b899a751",
					"Name": "github.com/alecthomas/template",
					"Version": "0.0.0-20190718012654-fb15b899a751",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/alecthomas/units@v0.0.0-20190924025748-f65c72e2690d",
					"Name": "github.com/alecthomas/units",
					"Version": "0.0.0-20190924025748-f65c72e2690d",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/alexflint/go-filemutex@v1.1.0",
					"Name": "github.com/alexflint/go-filemutex",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/alexkohler/prealloc@v1.0.0",
					"Name": "github.com/alexkohler/prealloc",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/alicebob/gopher-json@v0.0.0-20200520072559-a9ecdc9d1d3a",
					"Name": "github.com/alicebob/gopher-json",
					"Version": "0.0.0-20200520072559-a9ecdc9d1d3a",
					"Licenses": [
						"Unlicense"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/alicebob/miniredis/v2@v2.23.0",
					"Name": "github.com/alicebob/miniredis/v2",
					"Version": "2.23.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/alicebob/gopher-json@v0.0.0-20200520072559-a9ecdc9d1d3a",
						"github.com/yuin/gopher-lua@v0.0.0-20210529063254-f4c35e4016d9"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aliyun/aliyun-oss-go-sdk@v0.0.0-20190307165228-86c17b95fcd5",
					"Name": "github.com/aliyun/aliyun-oss-go-sdk",
					"Version": "0.0.0-20190307165228-86c17b95fcd5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/andreyvit/diff@v0.0.0-20170406064948-c7f18ee00883",
					"Name": "github.com/andreyvit/diff",
					"Version": "0.0.0-20170406064948-c7f18ee00883",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/andybalholm/brotli@v1.0.3",
					"Name": "github.com/andybalholm/brotli",
					"Version": "1.0.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/andybalholm/cascadia@v1.2.0",
					"Name": "github.com/andybalholm/cascadia",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/anmitsu/go-shlex@v0.0.0-20200514113438-38f4b401e2be",
					"Name": "github.com/anmitsu/go-shlex",
					"Version": "0.0.0-20200514113438-38f4b401e2be",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/antihax/optional@v1.0.0",
					"Name": "github.com/antihax/optional",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/antlr/antlr4/runtime/Go/antlr@v1.4.10",
					"Name": "github.com/antlr/antlr4/runtime/Go/antlr",
					"Version": "1.4.10",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aokoli/goutils@v1.0.1",
					"Name": "github.com/aokoli/goutils",
					"Version": "1.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/apache/beam/sdks/v2@v2.0.0-20211012030016-ef4364519c94",
					"Name": "github.com/apache/beam/sdks/v2",
					"Version": "2.0.0-20211012030016-ef4364519c94",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/apache/thrift@v0.12.0",
					"Name": "github.com/apache/thrift",
					"Version": "0.12.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/apex/log@v1.3.0",
					"Name": "github.com/apex/log",
					"Version": "1.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/apex/logs@v0.0.4",
					"Name": "github.com/apex/logs",
					"Version": "0.0.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aphistic/golf@v0.0.0-20180712155816-02c07f170c5a",
					"Name": "github.com/aphistic/golf",
					"Version": "0.0.0-20180712155816-02c07f170c5a",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aphistic/sweet@v0.2.0",
					"Name": "github.com/aphistic/sweet",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/apparentlymart/go-cidr@v1.1.0",
					"Name": "github.com/apparentlymart/go-cidr",
					"Version": "1.1.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/apparentlymart/go-dump@v0.0.0-20180507223929-23540a00eaa3",
					"Name": "github.com/apparentlymart/go-dump",
					"Version": "0.0.0-20180507223929-23540a00eaa3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/apparentlymart/go-textseg@v1.0.0",
					"Name": "github.com/apparentlymart/go-textseg",
					"Version": "1.0.0",
					"Licenses": [
						"Apache-2.0",
						"MIT",
						"Unicode-DFS-2016"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/apparentlymart/go-textseg/v13@v13.0.0",
					"Name": "github.com/apparentlymart/go-textseg/v13",
					"Version": "13.0.0",
					"Licenses": [
						"Apache-2.0",
						"MIT",
						"Unicode-DFS-2016"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/bolt-fixtures@v0.0.0-20200903104109-d34e7f983986",
					"Name": "github.com/aquasecurity/bolt-fixtures",
					"Version": "0.0.0-20200903104109-d34e7f983986",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"go.etcd.io/bbolt@v1.3.6",
						"github.com/goccy/go-yaml@v1.8.2",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/defsec@v0.84.0",
					"Name": "github.com/aquasecurity/defsec",
					"Version": "0.84.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/go-dep-parser@v0.0.0-20230228091112-63a15cdc6bc3",
					"Name": "github.com/aquasecurity/go-dep-parser",
					"Version": "0.0.0-20230228091112-63a15cdc6bc3",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aquasecurity/go-pep440-version@v0.0.0-20210121094942-22b2f8951d46",
						"go.uber.org/zap@v1.24.0",
						"golang.org/x/exp@v0.0.0-20220823124025-807a23277127",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
						"github.com/BurntSushi/toml@v1.2.1",
						"github.com/hashicorp/go-multierror@v1.1.1",
						"github.com/microsoft/go-rustaudit@v0.0.0-20220808201409-204dfee52032",
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/net@v0.7.0",
						"github.com/hashicorp/go-retryablehttp@v0.7.2",
						"github.com/liamg/jfather@v0.0.7",
						"golang.org/x/mod@v0.8.0",
						"github.com/samber/lo@v1.37.0",
						"gopkg.in/yaml.v3@v3.0.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/go-gem-version@v0.0.0-20201115065557-8eed6fe000ce",
					"Name": "github.com/aquasecurity/go-gem-version",
					"Version": "0.0.0-20201115065557-8eed6fe000ce",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aquasecurity/go-version@v0.0.0-20210121072130-637058cfe492",
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/go-mock-aws@v0.0.0-20220726154943-99847deb62b0",
					"Name": "github.com/aquasecurity/go-mock-aws",
					"Version": "0.0.0-20220726154943-99847deb62b0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/docker/docker@v23.0.0-rc.1+incompatible",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/credentials@v1.13.15",
						"github.com/docker/go-connections@v0.4.0",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/aws/aws-sdk-go-v2/config@v1.18.15",
						"github.com/aws/aws-sdk-go-v2/service/sqs@v1.19.10"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/go-npm-version@v0.0.0-20201110091526-0b796d180798",
					"Name": "github.com/aquasecurity/go-npm-version",
					"Version": "0.0.0-20201110091526-0b796d180798",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
						"github.com/aquasecurity/go-version@v0.0.0-20210121072130-637058cfe492",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/urfave/cli/v2@v2.3.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/go-pep440-version@v0.0.0-20210121094942-22b2f8951d46",
					"Name": "github.com/aquasecurity/go-pep440-version",
					"Version": "0.0.0-20210121094942-22b2f8951d46",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
						"github.com/aquasecurity/go-version@v0.0.0-20210121072130-637058cfe492",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/go-version@v0.0.0-20210121072130-637058cfe492",
					"Name": "github.com/aquasecurity/go-version",
					"Version": "0.0.0-20210121072130-637058cfe492",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1",
						"github.com/urfave/cli/v2@v2.3.0",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/loading@v0.0.5",
					"Name": "github.com/aquasecurity/loading",
					"Version": "0.0.5",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/term@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/memoryfs@v1.4.4",
					"Name": "github.com/aquasecurity/memoryfs",
					"Version": "1.4.4",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/table@v1.8.0",
					"Name": "github.com/aquasecurity/table",
					"Version": "1.8.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/mattn/go-runewidth@v0.0.13",
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/term@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/testdocker@v0.0.0-20230111101738-e741bda259da",
					"Name": "github.com/aquasecurity/testdocker",
					"Version": "0.0.0-20230111101738-e741bda259da",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
						"google.golang.org/grpc@v1.52.0",
						"github.com/docker/docker@v23.0.0-rc.1+incompatible",
						"github.com/docker/go-connections@v0.4.0",
						"github.com/golang-jwt/jwt/v4@v4.4.2",
						"github.com/google/go-containerregistry@v0.12.0",
						"github.com/gorilla/mux@v1.8.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/tml@v0.6.1",
					"Name": "github.com/aquasecurity/tml",
					"Version": "0.6.1",
					"Licenses": [
						"Unlicense"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/trivy@v0.38.0",
					"Name": "github.com/aquasecurity/trivy",
					"Version": "0.38.0",
					"Licenses": [
						"Apache-2.0"
					],
					"DependsOn": [
						"github.com/xlab/treeprint@v1.1.0",
						"github.com/Azure/go-autorest/autorest@v0.11.28",
						"github.com/samber/lo@v1.37.0",
						"go.uber.org/zap@v1.24.0",
						"github.com/aquasecurity/go-dep-parser@v0.0.0-20230228091112-63a15cdc6bc3",
						"github.com/masahiro331/go-xfs-filesystem@v0.0.0-20221225060805-c02764233454",
						"github.com/alicebob/miniredis/v2@v2.23.0",
						"github.com/aquasecurity/bolt-fixtures@v0.0.0-20200903104109-d34e7f983986",
						"github.com/google/licenseclassifier/v2@v2.0.0",
						"github.com/aquasecurity/trivy-db@v0.0.0-20230116084806-4bcdf1c414d0",
						"golang.org/x/sync@v0.1.0",
						"github.com/open-policy-agent/opa@v0.44.1-0.20220927105354-00e835a7cc15",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
						"golang.org/x/crypto@v0.5.0",
						"github.com/fatih/color@v1.13.0",
						"github.com/knqyf263/go-rpm-version@v0.0.0-20220614171824-631e686d1075",
						"github.com/in-toto/in-toto-golang@v0.5.0",
						"github.com/google/uuid@v1.3.0",
						"github.com/sosedoff/gitkit@v0.3.0",
						"github.com/Azure/azure-sdk-for-go@v67.1.0+incompatible",
						"github.com/aws/aws-sdk-go-v2/service/ec2@v1.86.1",
						"github.com/aws/aws-sdk-go@v1.44.210",
						"github.com/knqyf263/go-deb-version@v0.0.0-20230223133812-3ed183d23422",
						"github.com/CycloneDX/cyclonedx-go@v0.7.0",
						"github.com/masahiro331/go-mvn-version@v0.0.0-20210429150710-d3157d602a08",
						"golang.org/x/term@v0.5.0",
						"github.com/testcontainers/testcontainers-go@v0.17.0",
						"github.com/masahiro331/go-vmdk-parser@v0.0.0-20221225061455-612096e4bbbd",
						"github.com/mailru/easyjson@v0.7.7",
						"github.com/package-url/packageurl-go@v0.1.1-0.20220428063043-89078438f170",
						"github.com/sigstore/rekor@v1.0.1",
						"github.com/twitchtv/twirp@v8.1.2+incompatible",
						"github.com/docker/docker@v23.0.0-rc.1+incompatible",
						"github.com/knqyf263/go-apk-version@v0.0.0-20200609155635-041fdbb8563f",
						"k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
						"github.com/Azure/go-autorest/autorest/adal@v0.9.21",
						"github.com/aquasecurity/defsec@v0.84.0",
						"golang.org/x/mod@v0.8.0",
						"github.com/hashicorp/go-multierror@v1.1.1",
						"github.com/aquasecurity/go-gem-version@v0.0.0-20201115065557-8eed6fe000ce",
						"github.com/cenkalti/backoff@v2.2.1+incompatible",
						"github.com/secure-systems-lab/go-securesystemslib@v0.4.0",
						"github.com/aquasecurity/memoryfs@v1.4.4",
						"github.com/golang-jwt/jwt@v3.2.2+incompatible",
						"github.com/masahiro331/go-disk@v0.0.0-20220919035250-c8da316f91ac",
						"github.com/knqyf263/go-rpmdb@v0.0.0-20230201142403-697bc51b3948",
						"github.com/NYTimes/gziphandler@v1.1.1",
						"golang.org/x/exp@v0.0.0-20220823124025-807a23277127",
						"github.com/knqyf263/nested@v0.0.1",
						"github.com/aws/aws-sdk-go-v2/config@v1.18.15",
						"go.etcd.io/bbolt@v1.3.6",
						"github.com/cheggaaa/pb/v3@v3.1.0",
						"github.com/owenrumney/go-sarif/v2@v2.1.2",
						"github.com/mitchellh/hashstructure/v2@v2.0.2",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/Azure/go-autorest/autorest/azure/auth@v0.5.11",
						"github.com/aquasecurity/trivy-java-db@v0.0.0-20230209231723-7cddb1406728",
						"github.com/docker/go-connections@v0.4.0",
						"github.com/kylelemons/godebug@v1.1.0",
						"github.com/tetratelabs/wazero@v1.0.0-pre.9",
						"github.com/aws/aws-sdk-go-v2/service/sts@v1.18.5",
						"github.com/spf13/cast@v1.5.0",
						"gopkg.in/yaml.v3@v3.0.1",
						"github.com/spf13/pflag@v1.0.5",
						"github.com/google/wire@v0.5.0",
						"modernc.org/sqlite@v1.20.3",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/spf13/viper@v1.15.0",
						"github.com/masahiro331/go-ebs-file@v0.0.0-20221225061409-5ef263bb2cc3",
						"github.com/spdx/tools-golang@v0.4.0",
						"github.com/caarlos0/env/v6@v6.10.1",
						"github.com/aquasecurity/trivy-kubernetes@v0.3.1-0.20230223104408-c772810be7c3",
						"github.com/containerd/containerd@v1.6.18",
						"github.com/hashicorp/golang-lru/v2@v2.0.1",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/Masterminds/sprig/v3@v3.2.3",
						"gotest.tools@v2.2.0+incompatible",
						"github.com/go-redis/redis/v8@v8.11.5",
						"github.com/aquasecurity/loading@v0.0.5",
						"github.com/aquasecurity/go-version@v0.0.0-20210121072130-637058cfe492",
						"github.com/hashicorp/go-getter@v1.7.0",
						"github.com/saracen/walker@v0.0.0-20191201085201-324a081bae7e",
						"github.com/google/go-containerregistry@v0.12.0",
						"github.com/masahiro331/go-ext4-filesystem@v0.0.0-20221225060520-c150f5eacfe1",
						"github.com/opencontainers/go-digest@v1.0.0",
						"google.golang.org/protobuf@v1.28.1",
						"github.com/moby/buildkit@v0.11.0",
						"github.com/aquasecurity/testdocker@v0.0.0-20230111101738-e741bda259da",
						"github.com/go-openapi/runtime@v0.25.0",
						"github.com/opencontainers/image-spec@v1.1.0-rc2",
						"github.com/aquasecurity/table@v1.8.0",
						"github.com/GoogleCloudPlatform/docker-credential-gcr@v2.0.5+incompatible",
						"github.com/spf13/cobra@v1.6.1",
						"github.com/go-openapi/strfmt@v0.21.3",
						"github.com/aquasecurity/go-pep440-version@v0.0.0-20210121094942-22b2f8951d46",
						"github.com/aquasecurity/tml@v0.6.1",
						"github.com/go-git/go-git/v5@v5.5.2",
						"github.com/aquasecurity/go-npm-version@v0.0.0-20201110091526-0b796d180798",
						"golang.org/x/text@v0.7.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/trivy-db@v0.0.0-20230116084806-4bcdf1c414d0",
					"Name": "github.com/aquasecurity/trivy-db",
					"Version": "0.0.0-20230116084806-4bcdf1c414d0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/vuln@v0.0.0-20211221130724-9d39a965865f",
						"github.com/aquasecurity/bolt-fixtures@v0.0.0-20200903104109-d34e7f983986",
						"gopkg.in/yaml.v2@v2.4.0",
						"k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
						"github.com/knqyf263/go-deb-version@v0.0.0-20230223133812-3ed183d23422",
						"golang.org/x/text@v0.7.0",
						"github.com/urfave/cli@v1.22.7",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
						"github.com/knqyf263/go-rpm-version@v0.0.0-20220614171824-631e686d1075",
						"go.uber.org/zap@v1.24.0",
						"github.com/briandowns/spinner@v1.12.0",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/hashicorp/go-version@v1.6.0",
						"go.etcd.io/bbolt@v1.3.6",
						"gopkg.in/cheggaaa/pb.v1@v1.0.28"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/trivy-java-db@v0.0.0-20230209231723-7cddb1406728",
					"Name": "github.com/aquasecurity/trivy-java-db",
					"Version": "0.0.0-20230209231723-7cddb1406728",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/PuerkitoBio/goquery@v1.5.1",
						"github.com/cheggaaa/pb/v3@v3.1.0",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
						"k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/sync@v0.1.0",
						"github.com/hashicorp/go-retryablehttp@v0.7.2",
						"github.com/spf13/cobra@v1.6.1",
						"modernc.org/sqlite@v1.20.3"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aquasecurity/trivy-kubernetes@v0.3.1-0.20230223104408-c772810be7c3",
					"Name": "github.com/aquasecurity/trivy-kubernetes",
					"Version": "0.3.1-0.20230223104408-c772810be7c3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/arbovm/levenshtein@v0.0.0-20160628152529-48b4e1c0c4d0",
					"Name": "github.com/arbovm/levenshtein",
					"Version": "0.0.0-20160628152529-48b4e1c0c4d0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/armon/circbuf@v0.0.0-20190214190532-5111143e8da2",
					"Name": "github.com/armon/circbuf",
					"Version": "0.0.0-20190214190532-5111143e8da2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/armon/consul-api@v0.0.0-20180202201655-eb2c6b5be1b6",
					"Name": "github.com/armon/consul-api",
					"Version": "0.0.0-20180202201655-eb2c6b5be1b6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/armon/go-metrics@v0.4.1",
					"Name": "github.com/armon/go-metrics",
					"Version": "0.4.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/armon/go-radix@v1.0.0",
					"Name": "github.com/armon/go-radix",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/armon/go-socks5@v0.0.0-20160902184237-e75332964ef5",
					"Name": "github.com/armon/go-socks5",
					"Version": "0.0.0-20160902184237-e75332964ef5",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/asaskevich/govalidator@v0.0.0-20210307081110-f21760c49a8d",
					"Name": "github.com/asaskevich/govalidator",
					"Version": "0.0.0-20210307081110-f21760c49a8d",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ashanbrown/forbidigo@v1.2.0",
					"Name": "github.com/ashanbrown/forbidigo",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ashanbrown/makezero@v0.0.0-20210520155254-b6261585ddde",
					"Name": "github.com/ashanbrown/makezero",
					"Version": "0.0.0-20210520155254-b6261585ddde",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go@v1.44.210",
					"Name": "github.com/aws/aws-sdk-go",
					"Version": "1.44.210",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2@v1.17.5",
					"Name": "github.com/aws/aws-sdk-go-v2",
					"Version": "1.17.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/aws/protocol/eventstream@v1.4.8",
					"Name": "github.com/aws/aws-sdk-go-v2/aws/protocol/eventstream",
					"Version": "1.4.8",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/config@v1.18.15",
					"Name": "github.com/aws/aws-sdk-go-v2/config",
					"Version": "1.18.15",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/service/sso@v1.12.4",
						"github.com/aws/aws-sdk-go-v2/service/ssooidc@v1.14.4",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/ini@v1.3.30",
						"github.com/aws/aws-sdk-go-v2/service/sts@v1.18.5",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/aws/aws-sdk-go-v2/credentials@v1.13.15",
						"github.com/aws/aws-sdk-go-v2/feature/ec2/imds@v1.12.23"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/credentials@v1.13.15",
					"Name": "github.com/aws/aws-sdk-go-v2/credentials",
					"Version": "1.13.15",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/feature/ec2/imds@v1.12.23",
						"github.com/aws/aws-sdk-go-v2/service/sso@v1.12.4",
						"github.com/aws/aws-sdk-go-v2/service/ssooidc@v1.14.4",
						"github.com/aws/aws-sdk-go-v2/service/sts@v1.18.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/feature/ec2/imds@v1.12.23",
					"Name": "github.com/aws/aws-sdk-go-v2/feature/ec2/imds",
					"Version": "1.12.23",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/google/go-cmp@v0.5.9"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/feature/s3/manager@v1.11.10",
					"Name": "github.com/aws/aws-sdk-go-v2/feature/s3/manager",
					"Version": "1.11.10",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
					"Name": "github.com/aws/aws-sdk-go-v2/internal/configsources",
					"Version": "1.1.29",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
					"Name": "github.com/aws/aws-sdk-go-v2/internal/endpoints/v2",
					"Version": "2.4.23",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/internal/ini@v1.3.30",
					"Name": "github.com/aws/aws-sdk-go-v2/internal/ini",
					"Version": "1.3.30",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/internal/v4a@v1.0.14",
					"Name": "github.com/aws/aws-sdk-go-v2/internal/v4a",
					"Version": "1.0.14",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/google/go-cmp@v0.5.9"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/accessanalyzer@v1.16.0",
					"Name": "github.com/aws/aws-sdk-go-v2/service/accessanalyzer",
					"Version": "1.16.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/apigateway@v1.15.24",
					"Name": "github.com/aws/aws-sdk-go-v2/service/apigateway",
					"Version": "1.15.24",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/aws/aws-sdk-go-v2@v1.17.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/apigatewayv2@v1.12.18",
					"Name": "github.com/aws/aws-sdk-go-v2/service/apigatewayv2",
					"Version": "1.12.18",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/athena@v1.18.10",
					"Name": "github.com/aws/aws-sdk-go-v2/service/athena",
					"Version": "1.18.10",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/cloudfront@v1.20.5",
					"Name": "github.com/aws/aws-sdk-go-v2/service/cloudfront",
					"Version": "1.20.5",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/cloudtrail@v1.18.2",
					"Name": "github.com/aws/aws-sdk-go-v2/service/cloudtrail",
					"Version": "1.18.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/aws/aws-sdk-go-v2@v1.17.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/cloudwatch@v1.21.10",
					"Name": "github.com/aws/aws-sdk-go-v2/service/cloudwatch",
					"Version": "1.21.10",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/jmespath/go-jmespath@v0.4.0",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/cloudwatchlogs@v1.15.20",
					"Name": "github.com/aws/aws-sdk-go-v2/service/cloudwatchlogs",
					"Version": "1.15.20",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/aws/aws-sdk-go-v2@v1.17.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/codebuild@v1.19.17",
					"Name": "github.com/aws/aws-sdk-go-v2/service/codebuild",
					"Version": "1.19.17",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/docdb@v1.19.11",
					"Name": "github.com/aws/aws-sdk-go-v2/service/docdb",
					"Version": "1.19.11",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/aws-sdk-go-v2/service/internal/presigned-url@v1.9.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/dynamodb@v1.17.6",
					"Name": "github.com/aws/aws-sdk-go-v2/service/dynamodb",
					"Version": "1.17.6",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/aws-sdk-go-v2/service/internal/accept-encoding@v1.9.10",
						"github.com/aws/aws-sdk-go-v2/service/internal/endpoint-discovery@v1.7.19",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/ebs@v1.15.19",
					"Name": "github.com/aws/aws-sdk-go-v2/service/ebs",
					"Version": "1.15.19",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/ec2@v1.86.1",
					"Name": "github.com/aws/aws-sdk-go-v2/service/ec2",
					"Version": "1.86.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/ecr@v1.17.18",
					"Name": "github.com/aws/aws-sdk-go-v2/service/ecr",
					"Version": "1.17.18",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/ecs@v1.18.26",
					"Name": "github.com/aws/aws-sdk-go-v2/service/ecs",
					"Version": "1.18.26",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0",
						"github.com/aws/aws-sdk-go-v2@v1.17.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/efs@v1.17.15",
					"Name": "github.com/aws/aws-sdk-go-v2/service/efs",
					"Version": "1.17.15",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/eks@v1.22.1",
					"Name": "github.com/aws/aws-sdk-go-v2/service/eks",
					"Version": "1.22.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/elasticache@v1.22.10",
					"Name": "github.com/aws/aws-sdk-go-v2/service/elasticache",
					"Version": "1.22.10",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/elasticloadbalancingv2@v1.18.20",
					"Name": "github.com/aws/aws-sdk-go-v2/service/elasticloadbalancingv2",
					"Version": "1.18.20",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/jmespath/go-jmespath@v0.4.0",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/elasticsearchservice@v1.16.10",
					"Name": "github.com/aws/aws-sdk-go-v2/service/elasticsearchservice",
					"Version": "1.16.10",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/emr@v1.20.11",
					"Name": "github.com/aws/aws-sdk-go-v2/service/emr",
					"Version": "1.20.11",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/iam@v1.18.23",
					"Name": "github.com/aws/aws-sdk-go-v2/service/iam",
					"Version": "1.18.23",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/internal/accept-encoding@v1.9.10",
					"Name": "github.com/aws/aws-sdk-go-v2/service/internal/accept-encoding",
					"Version": "1.9.10",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/internal/checksum@v1.1.18",
					"Name": "github.com/aws/aws-sdk-go-v2/service/internal/checksum",
					"Version": "1.1.18",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/google/go-cmp@v0.5.9"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/internal/endpoint-discovery@v1.7.19",
					"Name": "github.com/aws/aws-sdk-go-v2/service/internal/endpoint-discovery",
					"Version": "1.7.19",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/internal/presigned-url@v1.9.23",
					"Name": "github.com/aws/aws-sdk-go-v2/service/internal/presigned-url",
					"Version": "1.9.23",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/internal/s3shared@v1.13.17",
					"Name": "github.com/aws/aws-sdk-go-v2/service/internal/s3shared",
					"Version": "1.13.17",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/kafka@v1.19.4",
					"Name": "github.com/aws/aws-sdk-go-v2/service/kafka",
					"Version": "1.19.4",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/kinesis@v1.15.19",
					"Name": "github.com/aws/aws-sdk-go-v2/service/kinesis",
					"Version": "1.15.19",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/aws/protocol/eventstream@v1.4.8"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/kms@v1.18.15",
					"Name": "github.com/aws/aws-sdk-go-v2/service/kms",
					"Version": "1.18.15",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/lambda@v1.24.6",
					"Name": "github.com/aws/aws-sdk-go-v2/service/lambda",
					"Version": "1.24.6",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/jmespath/go-jmespath@v0.4.0",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/mq@v1.13.15",
					"Name": "github.com/aws/aws-sdk-go-v2/service/mq",
					"Version": "1.13.15",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/neptune@v1.17.12",
					"Name": "github.com/aws/aws-sdk-go-v2/service/neptune",
					"Version": "1.17.12",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/service/internal/presigned-url@v1.9.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/rds@v1.26.1",
					"Name": "github.com/aws/aws-sdk-go-v2/service/rds",
					"Version": "1.26.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/aws-sdk-go-v2/service/internal/presigned-url@v1.9.23"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/redshift@v1.26.10",
					"Name": "github.com/aws/aws-sdk-go-v2/service/redshift",
					"Version": "1.26.10",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/jmespath/go-jmespath@v0.4.0",
						"github.com/aws/aws-sdk-go-v2@v1.17.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/s3@v1.27.11",
					"Name": "github.com/aws/aws-sdk-go-v2/service/s3",
					"Version": "1.27.11",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/service/internal/accept-encoding@v1.9.10",
						"github.com/aws/aws-sdk-go-v2/service/internal/checksum@v1.1.18",
						"github.com/aws/aws-sdk-go-v2/internal/v4a@v1.0.14",
						"github.com/aws/aws-sdk-go-v2/service/internal/presigned-url@v1.9.23",
						"github.com/aws/aws-sdk-go-v2/service/internal/s3shared@v1.13.17",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/aws/protocol/eventstream@v1.4.8",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/secretsmanager@v1.16.2",
					"Name": "github.com/aws/aws-sdk-go-v2/service/secretsmanager",
					"Version": "1.16.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/aws/aws-sdk-go-v2@v1.17.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/sns@v1.18.1",
					"Name": "github.com/aws/aws-sdk-go-v2/service/sns",
					"Version": "1.18.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/sqs@v1.19.10",
					"Name": "github.com/aws/aws-sdk-go-v2/service/sqs",
					"Version": "1.19.10",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/ssm@v1.15.0",
					"Name": "github.com/aws/aws-sdk-go-v2/service/ssm",
					"Version": "1.15.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/sso@v1.12.4",
					"Name": "github.com/aws/aws-sdk-go-v2/service/sso",
					"Version": "1.12.4",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/ssooidc@v1.14.4",
					"Name": "github.com/aws/aws-sdk-go-v2/service/ssooidc",
					"Version": "1.14.4",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/sts@v1.18.5",
					"Name": "github.com/aws/aws-sdk-go-v2/service/sts",
					"Version": "1.18.5",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/aws-sdk-go-v2/service/internal/presigned-url@v1.9.23",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/aws/aws-sdk-go-v2@v1.17.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/aws-sdk-go-v2/service/workspaces@v1.23.0",
					"Name": "github.com/aws/aws-sdk-go-v2/service/workspaces",
					"Version": "1.23.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/internal/configsources@v1.1.29",
						"github.com/aws/aws-sdk-go-v2/internal/endpoints/v2@v2.4.23",
						"github.com/aws/smithy-go@v1.13.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aws/smithy-go@v1.13.5",
					"Name": "github.com/aws/smithy-go",
					"Version": "1.13.5",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/google/go-cmp@v0.5.9",
						"github.com/jmespath/go-jmespath@v0.4.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/aybabtme/rgbterm@v0.0.0-20170906152045-cc83f3b3ce59",
					"Name": "github.com/aybabtme/rgbterm",
					"Version": "0.0.0-20170906152045-cc83f3b3ce59",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/aymerick/douceur@v0.2.0",
					"Name": "github.com/aymerick/douceur",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/baiyubin/aliyun-sts-go-sdk@v0.0.0-20180326062324-cfa1a18b161f",
					"Name": "github.com/baiyubin/aliyun-sts-go-sdk",
					"Version": "0.0.0-20180326062324-cfa1a18b161f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/beeker1121/goque@v1.0.3-0.20191103205551-d618510128af",
					"Name": "github.com/beeker1121/goque",
					"Version": "1.0.3-0.20191103205551-d618510128af",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/beevik/etree@v1.1.0",
					"Name": "github.com/beevik/etree",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/benbjohnson/clock@v1.1.0",
					"Name": "github.com/benbjohnson/clock",
					"Version": "1.1.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/beorn7/perks@v1.0.1",
					"Name": "github.com/beorn7/perks",
					"Version": "1.0.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bgentry/go-netrc@v0.0.0-20140422174119-9fd32a8b3d3d",
					"Name": "github.com/bgentry/go-netrc",
					"Version": "0.0.0-20140422174119-9fd32a8b3d3d",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bgentry/speakeasy@v0.1.0",
					"Name": "github.com/bgentry/speakeasy",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bitly/go-simplejson@v0.5.0",
					"Name": "github.com/bitly/go-simplejson",
					"Version": "0.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bits-and-blooms/bitset@v1.2.0",
					"Name": "github.com/bits-and-blooms/bitset",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bketelsen/crypt@v0.0.4",
					"Name": "github.com/bketelsen/crypt",
					"Version": "0.0.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bkielbasa/cyclop@v1.2.0",
					"Name": "github.com/bkielbasa/cyclop",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/blakesmith/ar@v0.0.0-20190502131153-809d4375e1fb",
					"Name": "github.com/blakesmith/ar",
					"Version": "0.0.0-20190502131153-809d4375e1fb",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/blang/semver@v3.5.1+incompatible",
					"Name": "github.com/blang/semver",
					"Version": "3.5.1+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/blang/semver/v4@v4.0.0",
					"Name": "github.com/blang/semver/v4",
					"Version": "4.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/blizzy78/varnamelen@v0.3.0",
					"Name": "github.com/blizzy78/varnamelen",
					"Version": "0.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bmatcuk/doublestar@v1.3.4",
					"Name": "github.com/bmatcuk/doublestar",
					"Version": "1.3.4",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bmizerany/assert@v0.0.0-20160611221934-b7ed37b82869",
					"Name": "github.com/bmizerany/assert",
					"Version": "0.0.0-20160611221934-b7ed37b82869",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bombsimon/wsl/v2@v2.2.0",
					"Name": "github.com/bombsimon/wsl/v2",
					"Version": "2.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bombsimon/wsl/v3@v3.3.0",
					"Name": "github.com/bombsimon/wsl/v3",
					"Version": "3.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bradfitz/go-smtpd@v0.0.0-20170404230938-deb6d6237625",
					"Name": "github.com/bradfitz/go-smtpd",
					"Version": "0.0.0-20170404230938-deb6d6237625",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bradfitz/gomemcache@v0.0.0-20190913173617-a41fca850d0b",
					"Name": "github.com/bradfitz/gomemcache",
					"Version": "0.0.0-20190913173617-a41fca850d0b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bradleyjkemp/cupaloy/v2@v2.8.0",
					"Name": "github.com/bradleyjkemp/cupaloy/v2",
					"Version": "2.8.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/davecgh/go-spew@v1.1.1",
						"github.com/pmezard/go-difflib@v1.0.0",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/breml/bidichk@v0.1.1",
					"Name": "github.com/breml/bidichk",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/briandowns/spinner@v1.12.0",
					"Name": "github.com/briandowns/spinner",
					"Version": "1.12.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/fatih/color@v1.13.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/bshuster-repo/logrus-logstash-hook@v1.0.0",
					"Name": "github.com/bshuster-repo/logrus-logstash-hook",
					"Version": "1.0.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/buger/jsonparser@v1.1.1",
					"Name": "github.com/buger/jsonparser",
					"Version": "1.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bugsnag/bugsnag-go@v0.0.0-20141110184014-b1d153021fcd",
					"Name": "github.com/bugsnag/bugsnag-go",
					"Version": "0.0.0-20141110184014-b1d153021fcd",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bugsnag/osext@v0.0.0-20130617224835-0dd3f918b21b",
					"Name": "github.com/bugsnag/osext",
					"Version": "0.0.0-20130617224835-0dd3f918b21b",
					"Licenses": [
						"Zlib"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bugsnag/panicwrap@v0.0.0-20151223152923-e2c28503fcd0",
					"Name": "github.com/bugsnag/panicwrap",
					"Version": "0.0.0-20151223152923-e2c28503fcd0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/butuzov/ireturn@v0.1.1",
					"Name": "github.com/butuzov/ireturn",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bwesterb/go-ristretto@v1.2.0",
					"Name": "github.com/bwesterb/go-ristretto",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/bytecodealliance/wasmtime-go@v1.0.0",
					"Name": "github.com/bytecodealliance/wasmtime-go",
					"Version": "1.0.0",
					"Licenses": [
						"Apache-with-LLVM-Exception"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/caarlos0/ctrlc@v1.0.0",
					"Name": "github.com/caarlos0/ctrlc",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/caarlos0/env/v6@v6.10.1",
					"Name": "github.com/caarlos0/env/v6",
					"Version": "6.10.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/campoy/unique@v0.0.0-20180121183637-88950e537e7e",
					"Name": "github.com/campoy/unique",
					"Version": "0.0.0-20180121183637-88950e537e7e",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/carolynvs/magex@v0.9.0",
					"Name": "github.com/carolynvs/magex",
					"Version": "0.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cavaliercoder/badio@v0.0.0-20160213150051-ce5280129e9e",
					"Name": "github.com/cavaliercoder/badio",
					"Version": "0.0.0-20160213150051-ce5280129e9e",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cavaliercoder/go-cpio@v0.0.0-20180626203310-925f9528c45e",
					"Name": "github.com/cavaliercoder/go-cpio",
					"Version": "0.0.0-20180626203310-925f9528c45e",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cavaliercoder/go-rpm@v0.0.0-20200122174316-8cb9fd9c31a8",
					"Name": "github.com/cavaliercoder/go-rpm",
					"Version": "0.0.0-20200122174316-8cb9fd9c31a8",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cenkalti/backoff@v2.2.1+incompatible",
					"Name": "github.com/cenkalti/backoff",
					"Version": "2.2.1+incompatible",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cenkalti/backoff/v3@v3.2.2",
					"Name": "github.com/cenkalti/backoff/v3",
					"Version": "3.2.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cenkalti/backoff/v4@v4.2.0",
					"Name": "github.com/cenkalti/backoff/v4",
					"Version": "4.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/census-instrumentation/opencensus-proto@v0.3.0",
					"Name": "github.com/census-instrumentation/opencensus-proto",
					"Version": "0.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/certifi/gocertifi@v0.0.0-20200922220541-2c3bb06c6054",
					"Name": "github.com/certifi/gocertifi",
					"Version": "0.0.0-20200922220541-2c3bb06c6054",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cespare/xxhash@v1.1.0",
					"Name": "github.com/cespare/xxhash",
					"Version": "1.1.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/OneOfOne/xxhash@v1.2.8",
						"github.com/spaolacci/murmur3@v1.1.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/cespare/xxhash/v2@v2.1.2",
					"Name": "github.com/cespare/xxhash/v2",
					"Version": "2.1.2",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/chai2010/gettext-go@v1.0.2",
					"Name": "github.com/chai2010/gettext-go",
					"Version": "1.0.2",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/charithe/durationcheck@v0.0.9",
					"Name": "github.com/charithe/durationcheck",
					"Version": "0.0.9",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/chavacava/garif@v0.0.0-20210405164556-e8a0a408d6af",
					"Name": "github.com/chavacava/garif",
					"Version": "0.0.0-20210405164556-e8a0a408d6af",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/checkpoint-restore/go-criu/v4@v4.1.0",
					"Name": "github.com/checkpoint-restore/go-criu/v4",
					"Version": "4.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/checkpoint-restore/go-criu/v5@v5.3.0",
					"Name": "github.com/checkpoint-restore/go-criu/v5",
					"Version": "5.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cheggaaa/pb@v1.0.27",
					"Name": "github.com/cheggaaa/pb",
					"Version": "1.0.27",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cheggaaa/pb/v3@v3.1.0",
					"Name": "github.com/cheggaaa/pb/v3",
					"Version": "3.1.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/VividCortex/ewma@v1.1.1",
						"github.com/fatih/color@v1.13.0",
						"github.com/mattn/go-colorable@v0.1.13",
						"github.com/mattn/go-isatty@v0.0.17",
						"github.com/mattn/go-runewidth@v0.0.13"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/chzyer/logex@v1.2.0",
					"Name": "github.com/chzyer/logex",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/chzyer/readline@v1.5.0",
					"Name": "github.com/chzyer/readline",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/chzyer/test@v0.0.0-20210722231415-061457976a23",
					"Name": "github.com/chzyer/test",
					"Version": "0.0.0-20210722231415-061457976a23",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cilium/ebpf@v0.7.0",
					"Name": "github.com/cilium/ebpf",
					"Version": "0.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/circonus-labs/circonus-gometrics@v2.3.1+incompatible",
					"Name": "github.com/circonus-labs/circonus-gometrics",
					"Version": "2.3.1+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/circonus-labs/circonusllhist@v0.1.3",
					"Name": "github.com/circonus-labs/circonusllhist",
					"Version": "0.1.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/client9/misspell@v0.3.4",
					"Name": "github.com/client9/misspell",
					"Version": "0.3.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cloudflare/circl@v1.1.0",
					"Name": "github.com/cloudflare/circl",
					"Version": "1.1.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/bwesterb/go-ristretto@v1.2.0",
						"golang.org/x/crypto@v0.5.0",
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/cncf/udpa/go@v0.0.0-20210930031921-04548b0d99d4",
					"Name": "github.com/cncf/udpa/go",
					"Version": "0.0.0-20210930031921-04548b0d99d4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cncf/xds/go@v0.0.0-20211011173535-cb28da3451f1",
					"Name": "github.com/cncf/xds/go",
					"Version": "0.0.0-20211011173535-cb28da3451f1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cockroachdb/apd@v1.1.0",
					"Name": "github.com/cockroachdb/apd",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cockroachdb/datadriven@v0.0.0-20200714090401-bf6692d28da5",
					"Name": "github.com/cockroachdb/datadriven",
					"Version": "0.0.0-20200714090401-bf6692d28da5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cockroachdb/errors@v1.2.4",
					"Name": "github.com/cockroachdb/errors",
					"Version": "1.2.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cockroachdb/logtags@v0.0.0-20190617123548-eb05cc24525f",
					"Name": "github.com/cockroachdb/logtags",
					"Version": "0.0.0-20190617123548-eb05cc24525f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/codahale/hdrhistogram@v0.0.0-20160425231609-f8ad88b59a58",
					"Name": "github.com/codahale/hdrhistogram",
					"Version": "0.0.0-20160425231609-f8ad88b59a58",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/codahale/rfc6979@v0.0.0-20141003034818-6a90f24967eb",
					"Name": "github.com/codahale/rfc6979",
					"Version": "0.0.0-20141003034818-6a90f24967eb",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/common-nighthawk/go-figure@v0.0.0-20210622060536-734e95fb86be",
					"Name": "github.com/common-nighthawk/go-figure",
					"Version": "0.0.0-20210622060536-734e95fb86be",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/aufs@v1.0.0",
					"Name": "github.com/containerd/aufs",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/btrfs@v1.0.0",
					"Name": "github.com/containerd/btrfs",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/cgroups@v1.0.4",
					"Name": "github.com/containerd/cgroups",
					"Version": "1.0.4",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/cilium/ebpf@v0.7.0",
						"github.com/docker/go-units@v0.5.0",
						"github.com/sirupsen/logrus@v1.9.0",
						"go.uber.org/goleak@v1.2.0",
						"golang.org/x/sys@v0.5.0",
						"github.com/coreos/go-systemd/v22@v22.4.0",
						"github.com/godbus/dbus/v5@v5.0.6",
						"github.com/gogo/protobuf@v1.3.2",
						"github.com/opencontainers/runtime-spec@v1.0.3-0.20220311020903-6969a0a09ab1",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/console@v1.0.3",
					"Name": "github.com/containerd/console",
					"Version": "1.0.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/containerd@v1.6.18",
					"Name": "github.com/containerd/containerd",
					"Version": "1.6.18",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/continuity@v0.3.0",
					"Name": "github.com/containerd/continuity",
					"Version": "0.3.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"google.golang.org/protobuf@v1.28.1",
						"github.com/Microsoft/go-winio@v0.6.0",
						"github.com/opencontainers/go-digest@v1.0.0",
						"github.com/sirupsen/logrus@v1.9.0",
						"golang.org/x/sync@v0.1.0",
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/fifo@v1.0.0",
					"Name": "github.com/containerd/fifo",
					"Version": "1.0.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/pkg/errors@v0.9.1",
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/fuse-overlayfs-snapshotter@v1.0.2",
					"Name": "github.com/containerd/fuse-overlayfs-snapshotter",
					"Version": "1.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/go-cni@v1.1.6",
					"Name": "github.com/containerd/go-cni",
					"Version": "1.1.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/go-runc@v1.0.0",
					"Name": "github.com/containerd/go-runc",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/imgcrypt@v1.1.4",
					"Name": "github.com/containerd/imgcrypt",
					"Version": "1.1.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/nri@v0.1.0",
					"Name": "github.com/containerd/nri",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/nydus-snapshotter@v0.3.1",
					"Name": "github.com/containerd/nydus-snapshotter",
					"Version": "0.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/stargz-snapshotter@v0.13.0",
					"Name": "github.com/containerd/stargz-snapshotter",
					"Version": "0.13.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/stargz-snapshotter/estargz@v0.13.0",
					"Name": "github.com/containerd/stargz-snapshotter/estargz",
					"Version": "0.13.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/klauspost/compress@v1.15.12",
						"github.com/opencontainers/go-digest@v1.0.0",
						"github.com/vbatts/tar-split@v0.11.2",
						"golang.org/x/sync@v0.1.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/ttrpc@v1.1.1-0.20220420014843-944ef4a40df3",
					"Name": "github.com/containerd/ttrpc",
					"Version": "1.1.1-0.20220420014843-944ef4a40df3",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"google.golang.org/grpc@v1.52.0",
						"google.golang.org/protobuf@v1.28.1",
						"github.com/gogo/protobuf@v1.3.2",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/prometheus/procfs@v0.8.0",
						"github.com/sirupsen/logrus@v1.9.0",
						"golang.org/x/sys@v0.5.0",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/typeurl@v1.0.2",
					"Name": "github.com/containerd/typeurl",
					"Version": "1.0.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/gogo/protobuf@v1.3.2",
						"github.com/pkg/errors@v0.9.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/containerd/zfs@v1.0.0",
					"Name": "github.com/containerd/zfs",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containernetworking/cni@v1.1.1",
					"Name": "github.com/containernetworking/cni",
					"Version": "1.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containernetworking/plugins@v1.1.1",
					"Name": "github.com/containernetworking/plugins",
					"Version": "1.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/containers/ocicrypt@v1.1.3",
					"Name": "github.com/containers/ocicrypt",
					"Version": "1.1.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/coreos/bbolt@v1.3.2",
					"Name": "github.com/coreos/bbolt",
					"Version": "1.3.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/coreos/etcd@v3.3.13+incompatible",
					"Name": "github.com/coreos/etcd",
					"Version": "3.3.13+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/coreos/go-etcd@v2.0.0+incompatible",
					"Name": "github.com/coreos/go-etcd",
					"Version": "2.0.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/coreos/go-iptables@v0.6.0",
					"Name": "github.com/coreos/go-iptables",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/coreos/go-oidc@v2.1.0+incompatible",
					"Name": "github.com/coreos/go-oidc",
					"Version": "2.1.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/coreos/go-oidc/v3@v3.4.0",
					"Name": "github.com/coreos/go-oidc/v3",
					"Version": "3.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/coreos/go-semver@v0.3.0",
					"Name": "github.com/coreos/go-semver",
					"Version": "0.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/coreos/go-systemd@v0.0.0-20190719114852-fd7a80b32e1f",
					"Name": "github.com/coreos/go-systemd",
					"Version": "0.0.0-20190719114852-fd7a80b32e1f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/coreos/go-systemd/v22@v22.4.0",
					"Name": "github.com/coreos/go-systemd/v22",
					"Version": "22.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/coreos/pkg@v0.0.0-20180928190104-399ea9e2e55f",
					"Name": "github.com/coreos/pkg",
					"Version": "0.0.0-20180928190104-399ea9e2e55f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cpuguy83/go-md2man@v1.0.10",
					"Name": "github.com/cpuguy83/go-md2man",
					"Version": "1.0.10",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cpuguy83/go-md2man/v2@v2.0.2",
					"Name": "github.com/cpuguy83/go-md2man/v2",
					"Version": "2.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/creack/pty@v1.1.18",
					"Name": "github.com/creack/pty",
					"Version": "1.1.18",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cyberphone/json-canonicalization@v0.0.0-20210303052042-6bc126869bf4",
					"Name": "github.com/cyberphone/json-canonicalization",
					"Version": "0.0.0-20210303052042-6bc126869bf4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/cyphar/filepath-securejoin@v0.2.3",
					"Name": "github.com/cyphar/filepath-securejoin",
					"Version": "0.2.3",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/d2g/dhcp4@v0.0.0-20170904100407-a1d1b6c41b1c",
					"Name": "github.com/d2g/dhcp4",
					"Version": "0.0.0-20170904100407-a1d1b6c41b1c",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/d2g/dhcp4client@v1.0.0",
					"Name": "github.com/d2g/dhcp4client",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/d2g/dhcp4server@v0.0.0-20181031114812-7d4a0a7f59a5",
					"Name": "github.com/d2g/dhcp4server",
					"Version": "0.0.0-20181031114812-7d4a0a7f59a5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/d2g/hardwareaddr@v0.0.0-20190221164911-e7d9fbe030e4",
					"Name": "github.com/d2g/hardwareaddr",
					"Version": "0.0.0-20190221164911-e7d9fbe030e4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/daixiang0/gci@v0.2.9",
					"Name": "github.com/daixiang0/gci",
					"Version": "0.2.9",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/danieljoos/wincred@v1.1.2",
					"Name": "github.com/danieljoos/wincred",
					"Version": "1.1.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/davecgh/go-spew@v1.1.1",
					"Name": "github.com/davecgh/go-spew",
					"Version": "1.1.1",
					"Licenses": [
						"ISC"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/daviddengcn/go-colortext@v1.0.0",
					"Name": "github.com/daviddengcn/go-colortext",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/denis-tingajkin/go-header@v0.4.2",
					"Name": "github.com/denis-tingajkin/go-header",
					"Version": "0.4.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/denisenkom/go-mssqldb@v0.11.0",
					"Name": "github.com/denisenkom/go-mssqldb",
					"Version": "0.11.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/denverdino/aliyungo@v0.0.0-20190125010748-a747050bb1ba",
					"Name": "github.com/denverdino/aliyungo",
					"Version": "0.0.0-20190125010748-a747050bb1ba",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/devigned/tab@v0.1.1",
					"Name": "github.com/devigned/tab",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dgraph-io/badger/v3@v3.2103.2",
					"Name": "github.com/dgraph-io/badger/v3",
					"Version": "3.2103.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/klauspost/compress@v1.15.12",
						"go.opencensus.io@v0.24.0",
						"github.com/dgraph-io/ristretto@v0.1.0",
						"github.com/gogo/protobuf@v1.3.2",
						"github.com/google/flatbuffers@v1.12.1",
						"github.com/pkg/errors@v0.9.1",
						"github.com/cespare/xxhash@v1.1.0",
						"github.com/golang/snappy@v0.0.4",
						"github.com/spf13/cobra@v1.6.1",
						"golang.org/x/sys@v0.5.0",
						"github.com/dustin/go-humanize@v1.0.1",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/net@v0.7.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/dgraph-io/ristretto@v0.1.0",
					"Name": "github.com/dgraph-io/ristretto",
					"Version": "0.1.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/cespare/xxhash/v2@v2.1.2",
						"github.com/dgryski/go-farm@v0.0.0-20200201041132-a6ae2369ad13",
						"github.com/dustin/go-humanize@v1.0.1",
						"github.com/golang/glog@v1.0.0",
						"github.com/pkg/errors@v0.9.1",
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/dgrijalva/jwt-go@v3.2.0+incompatible",
					"Name": "github.com/dgrijalva/jwt-go",
					"Version": "3.2.0+incompatible",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dgryski/go-farm@v0.0.0-20200201041132-a6ae2369ad13",
					"Name": "github.com/dgryski/go-farm",
					"Version": "0.0.0-20200201041132-a6ae2369ad13",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dgryski/go-metro@v0.0.0-20180109044635-280f6062b5bc",
					"Name": "github.com/dgryski/go-metro",
					"Version": "0.0.0-20180109044635-280f6062b5bc",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dgryski/go-minhash@v0.0.0-20170608043002-7fe510aff544",
					"Name": "github.com/dgryski/go-minhash",
					"Version": "0.0.0-20170608043002-7fe510aff544",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dgryski/go-rendezvous@v0.0.0-20200823014737-9f7001d12a5f",
					"Name": "github.com/dgryski/go-rendezvous",
					"Version": "0.0.0-20200823014737-9f7001d12a5f",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dgryski/go-sip13@v0.0.0-20181026042036-e10d5fee7954",
					"Name": "github.com/dgryski/go-sip13",
					"Version": "0.0.0-20181026042036-e10d5fee7954",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dgryski/go-spooky@v0.0.0-20170606183049-ed3d087f40e2",
					"Name": "github.com/dgryski/go-spooky",
					"Version": "0.0.0-20170606183049-ed3d087f40e2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dgryski/trifles@v0.0.0-20200323201526-dd97f9abfb48",
					"Name": "github.com/dgryski/trifles",
					"Version": "0.0.0-20200323201526-dd97f9abfb48",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dimchansky/utfbom@v1.1.1",
					"Name": "github.com/dimchansky/utfbom",
					"Version": "1.1.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/distribution/distribution/v3@v3.0.0-20221208165359-362910506bc2",
					"Name": "github.com/distribution/distribution/v3",
					"Version": "3.0.0-20221208165359-362910506bc2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dlclark/regexp2@v1.4.0",
					"Name": "github.com/dlclark/regexp2",
					"Version": "1.4.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dnaeon/go-vcr@v1.1.0",
					"Name": "github.com/dnaeon/go-vcr",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dnephin/pflag@v1.0.7",
					"Name": "github.com/dnephin/pflag",
					"Version": "1.0.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/docker/cli@v23.0.0-rc.1+incompatible",
					"Name": "github.com/docker/cli",
					"Version": "23.0.0-rc.1+incompatible",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/docker/distribution@v2.8.1+incompatible",
					"Name": "github.com/docker/distribution",
					"Version": "2.8.1+incompatible",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/docker/docker@v23.0.0-rc.1+incompatible",
					"Name": "github.com/docker/docker",
					"Version": "23.0.0-rc.1+incompatible",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/docker/docker-credential-helpers@v0.7.0",
					"Name": "github.com/docker/docker-credential-helpers",
					"Version": "0.7.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/danieljoos/wincred@v1.1.2",
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/docker/go-connections@v0.4.0",
					"Name": "github.com/docker/go-connections",
					"Version": "0.4.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/docker/go-events@v0.0.0-20190806004212-e31b211e4f1c",
					"Name": "github.com/docker/go-events",
					"Version": "0.0.0-20190806004212-e31b211e4f1c",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/docker/go-metrics@v0.0.1",
					"Name": "github.com/docker/go-metrics",
					"Version": "0.0.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/prometheus/client_golang@v1.14.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/docker/go-units@v0.5.0",
					"Name": "github.com/docker/go-units",
					"Version": "0.5.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/docker/libnetwork@v0.8.0-dev.2.0.20200917202933-d0951081b35f",
					"Name": "github.com/docker/libnetwork",
					"Version": "0.8.0-dev.2.0.20200917202933-d0951081b35f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/docker/libtrust@v0.0.0-20150114040149-fa567046d9b1",
					"Name": "github.com/docker/libtrust",
					"Version": "0.0.0-20150114040149-fa567046d9b1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/docker/spdystream@v0.0.0-20160310174837-449fdfce4d96",
					"Name": "github.com/docker/spdystream",
					"Version": "0.0.0-20160310174837-449fdfce4d96",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/docopt/docopt-go@v0.0.0-20180111231733-ee0de3bc6815",
					"Name": "github.com/docopt/docopt-go",
					"Version": "0.0.0-20180111231733-ee0de3bc6815",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dsnet/compress@v0.0.2-0.20210315054119-f66993602bf5",
					"Name": "github.com/dsnet/compress",
					"Version": "0.0.2-0.20210315054119-f66993602bf5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dsnet/golib@v0.0.0-20171103203638-1ea166775780",
					"Name": "github.com/dsnet/golib",
					"Version": "0.0.0-20171103203638-1ea166775780",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/dustin/go-humanize@v1.0.1",
					"Name": "github.com/dustin/go-humanize",
					"Version": "1.0.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/eapache/go-resiliency@v1.1.0",
					"Name": "github.com/eapache/go-resiliency",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/eapache/go-xerial-snappy@v0.0.0-20180814174437-776d5712da21",
					"Name": "github.com/eapache/go-xerial-snappy",
					"Version": "0.0.0-20180814174437-776d5712da21",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/eapache/queue@v1.1.0",
					"Name": "github.com/eapache/queue",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/eggsampler/acme/v3@v3.3.0",
					"Name": "github.com/eggsampler/acme/v3",
					"Version": "3.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ekzhu/minhash-lsh@v0.0.0-20171225071031-5c06ee8586a1",
					"Name": "github.com/ekzhu/minhash-lsh",
					"Version": "0.0.0-20171225071031-5c06ee8586a1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/elazarl/goproxy@v0.0.0-20180725130230-947c36da3153",
					"Name": "github.com/elazarl/goproxy",
					"Version": "0.0.0-20180725130230-947c36da3153",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/emicklei/go-restful@v2.9.5+incompatible",
					"Name": "github.com/emicklei/go-restful",
					"Version": "2.9.5+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/emicklei/go-restful/v3@v3.9.0",
					"Name": "github.com/emicklei/go-restful/v3",
					"Version": "3.9.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/emirpasic/gods@v1.18.1",
					"Name": "github.com/emirpasic/gods",
					"Version": "1.18.1",
					"Licenses": [
						"BSD-2-Clause",
						"ISC"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/envoyproxy/go-control-plane@v0.10.2-0.20220325020618-49ff273808a1",
					"Name": "github.com/envoyproxy/go-control-plane",
					"Version": "0.10.2-0.20220325020618-49ff273808a1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/envoyproxy/protoc-gen-validate@v0.6.2",
					"Name": "github.com/envoyproxy/protoc-gen-validate",
					"Version": "0.6.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/esimonov/ifshort@v1.0.3",
					"Name": "github.com/esimonov/ifshort",
					"Version": "1.0.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/etcd-io/gofail@v0.0.0-20190801230047-ad7f989257ca",
					"Name": "github.com/etcd-io/gofail",
					"Version": "0.0.0-20190801230047-ad7f989257ca",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ettle/strcase@v0.1.1",
					"Name": "github.com/ettle/strcase",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/evanphx/json-patch@v5.6.0+incompatible",
					"Name": "github.com/evanphx/json-patch",
					"Version": "5.6.0+incompatible",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/evanphx/json-patch/v5@v5.5.0",
					"Name": "github.com/evanphx/json-patch/v5",
					"Version": "5.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/exponent-io/jsonpath@v0.0.0-20151013193312-d6023ce2651d",
					"Name": "github.com/exponent-io/jsonpath",
					"Version": "0.0.0-20151013193312-d6023ce2651d",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/facebookgo/clock@v0.0.0-20150410010913-600d898af40a",
					"Name": "github.com/facebookgo/clock",
					"Version": "0.0.0-20150410010913-600d898af40a",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/facebookgo/ensure@v0.0.0-20200202191622-63f1cf65ac4c",
					"Name": "github.com/facebookgo/ensure",
					"Version": "0.0.0-20200202191622-63f1cf65ac4c",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/facebookgo/limitgroup@v0.0.0-20150612190941-6abd8d71ec01",
					"Name": "github.com/facebookgo/limitgroup",
					"Version": "0.0.0-20150612190941-6abd8d71ec01",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/facebookgo/muster@v0.0.0-20150708232844-fd3d7953fd52",
					"Name": "github.com/facebookgo/muster",
					"Version": "0.0.0-20150708232844-fd3d7953fd52",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/facebookgo/stack@v0.0.0-20160209184415-751773369052",
					"Name": "github.com/facebookgo/stack",
					"Version": "0.0.0-20160209184415-751773369052",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/facebookgo/subset@v0.0.0-20200203212716-c811ad88dec4",
					"Name": "github.com/facebookgo/subset",
					"Version": "0.0.0-20200203212716-c811ad88dec4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/fatih/camelcase@v1.0.0",
					"Name": "github.com/fatih/camelcase",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/fatih/color@v1.13.0",
					"Name": "github.com/fatih/color",
					"Version": "1.13.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/mattn/go-colorable@v0.1.13",
						"github.com/mattn/go-isatty@v0.0.17"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/fatih/structs@v1.1.0",
					"Name": "github.com/fatih/structs",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/fatih/structtag@v1.2.0",
					"Name": "github.com/fatih/structtag",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/felixge/httpsnoop@v1.0.3",
					"Name": "github.com/felixge/httpsnoop",
					"Version": "1.0.3",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/flynn/go-docopt@v0.0.0-20140912013429-f6dd2ebbb31e",
					"Name": "github.com/flynn/go-docopt",
					"Version": "0.0.0-20140912013429-f6dd2ebbb31e",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/flynn/go-shlex@v0.0.0-20150515145356-3f9db97f8568",
					"Name": "github.com/flynn/go-shlex",
					"Version": "0.0.0-20150515145356-3f9db97f8568",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/fogleman/gg@v1.2.1-0.20190220221249-0403632d5b90",
					"Name": "github.com/fogleman/gg",
					"Version": "1.2.1-0.20190220221249-0403632d5b90",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/form3tech-oss/jwt-go@v3.2.5+incompatible",
					"Name": "github.com/form3tech-oss/jwt-go",
					"Version": "3.2.5+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/fortytw2/leaktest@v1.3.0",
					"Name": "github.com/fortytw2/leaktest",
					"Version": "1.3.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/foxcpp/go-mockdns@v0.0.0-20210729171921-fb145fc6f897",
					"Name": "github.com/foxcpp/go-mockdns",
					"Version": "0.0.0-20210729171921-fb145fc6f897",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/miekg/dns@v1.1.50"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/frankban/quicktest@v1.14.3",
					"Name": "github.com/frankban/quicktest",
					"Version": "1.14.3",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/google/go-cmp@v0.5.9",
						"github.com/kr/pretty@v0.3.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/fsnotify/fsnotify@v1.6.0",
					"Name": "github.com/fsnotify/fsnotify",
					"Version": "1.6.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/fullsailor/pkcs7@v0.0.0-20190404230743-d7302db945fa",
					"Name": "github.com/fullsailor/pkcs7",
					"Version": "0.0.0-20190404230743-d7302db945fa",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/fullstorydev/grpcurl@v1.8.7",
					"Name": "github.com/fullstorydev/grpcurl",
					"Version": "1.8.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/fvbommel/sortorder@v1.0.1",
					"Name": "github.com/fvbommel/sortorder",
					"Version": "1.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/fxamacker/cbor/v2@v2.4.0",
					"Name": "github.com/fxamacker/cbor/v2",
					"Version": "2.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/fzipp/gocyclo@v0.3.1",
					"Name": "github.com/fzipp/gocyclo",
					"Version": "0.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/garyburd/redigo@v0.0.0-20150301180006-535138d7bcd7",
					"Name": "github.com/garyburd/redigo",
					"Version": "0.0.0-20150301180006-535138d7bcd7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/getkin/kin-openapi@v0.76.0",
					"Name": "github.com/getkin/kin-openapi",
					"Version": "0.76.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/getsentry/raven-go@v0.2.0",
					"Name": "github.com/getsentry/raven-go",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ghodss/yaml@v1.0.0",
					"Name": "github.com/ghodss/yaml",
					"Version": "1.0.0",
					"Licenses": [
						"BSD-3-Clause",
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gin-contrib/sse@v0.1.0",
					"Name": "github.com/gin-contrib/sse",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gin-gonic/gin@v1.8.1",
					"Name": "github.com/gin-gonic/gin",
					"Version": "1.8.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/glebarez/go-sqlite@v1.20.3",
					"Name": "github.com/glebarez/go-sqlite",
					"Version": "1.20.3",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/sys@v0.5.0",
						"modernc.org/sqlite@v1.20.3",
						"github.com/google/pprof@v0.0.0-20221118152302-e6195bd50e26",
						"modernc.org/libc@v1.22.2",
						"modernc.org/mathutil@v1.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/gliderlabs/ssh@v0.3.5",
					"Name": "github.com/gliderlabs/ssh",
					"Version": "0.3.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-asn1-ber/asn1-ber@v1.3.1",
					"Name": "github.com/go-asn1-ber/asn1-ber",
					"Version": "1.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-chi/chi@v4.1.2+incompatible",
					"Name": "github.com/go-chi/chi",
					"Version": "4.1.2+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-critic/go-critic@v0.6.1",
					"Name": "github.com/go-critic/go-critic",
					"Version": "0.6.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-enry/go-license-detector/v4@v4.3.0",
					"Name": "github.com/go-enry/go-license-detector/v4",
					"Version": "4.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-errors/errors@v1.0.1",
					"Name": "github.com/go-errors/errors",
					"Version": "1.0.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-git/gcfg@v1.5.0",
					"Name": "github.com/go-git/gcfg",
					"Version": "1.5.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-git/go-billy/v5@v5.4.0",
					"Name": "github.com/go-git/go-billy/v5",
					"Version": "5.4.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/sys@v0.5.0",
						"gopkg.in/check.v1@v1.0.0-20201130134442-10cb98267c6c"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-git/go-git-fixtures/v4@v4.3.1",
					"Name": "github.com/go-git/go-git-fixtures/v4",
					"Version": "4.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-git/go-git/v5@v5.5.2",
					"Name": "github.com/go-git/go-git/v5",
					"Version": "5.5.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/acomagu/bufpipe@v1.0.3",
						"github.com/armon/go-socks5@v0.0.0-20160902184237-e75332964ef5",
						"github.com/emirpasic/gods@v1.18.1",
						"github.com/jbenet/go-context@v0.0.0-20150711004518-d14ea06fba99",
						"github.com/kevinburke/ssh_config@v1.2.0",
						"golang.org/x/net@v0.7.0",
						"golang.org/x/text@v0.7.0",
						"github.com/gliderlabs/ssh@v0.3.5",
						"github.com/go-git/go-git-fixtures/v4@v4.3.1",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/jessevdk/go-flags@v1.5.0",
						"gopkg.in/check.v1@v1.0.0-20201130134442-10cb98267c6c",
						"github.com/ProtonMail/go-crypto@v0.0.0-20221026131551-cf6655e29de4",
						"github.com/imdario/mergo@v0.3.13",
						"github.com/skeema/knownhosts@v1.1.0",
						"golang.org/x/crypto@v0.5.0",
						"github.com/xanzy/ssh-agent@v0.3.3",
						"golang.org/x/sys@v0.5.0",
						"github.com/go-git/gcfg@v1.5.0",
						"github.com/go-git/go-billy/v5@v5.4.0",
						"github.com/pjbgf/sha1cd@v0.2.3",
						"github.com/sergi/go-diff@v1.2.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-gl/glfw@v0.0.0-20190409004039-e6da0acd62b1",
					"Name": "github.com/go-gl/glfw",
					"Version": "0.0.0-20190409004039-e6da0acd62b1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-gl/glfw/v3.3/glfw@v0.0.0-20200222043503-6f7a984d4dc4",
					"Name": "github.com/go-gl/glfw/v3.3/glfw",
					"Version": "0.0.0-20200222043503-6f7a984d4dc4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-gorp/gorp/v3@v3.0.2",
					"Name": "github.com/go-gorp/gorp/v3",
					"Version": "3.0.2",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/ziutek/mymysql@v1.5.4",
						"github.com/go-sql-driver/mysql@v1.6.0",
						"github.com/lib/pq@v1.10.7",
						"github.com/mattn/go-sqlite3@v2.0.3+incompatible",
						"github.com/poy/onpar@v0.0.0-20190519213022-ee068f8ea4d1",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-ini/ini@v1.67.0",
					"Name": "github.com/go-ini/ini",
					"Version": "1.67.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-kit/kit@v0.9.0",
					"Name": "github.com/go-kit/kit",
					"Version": "0.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-kit/log@v0.2.0",
					"Name": "github.com/go-kit/log",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-ldap/ldap/v3@v3.1.10",
					"Name": "github.com/go-ldap/ldap/v3",
					"Version": "3.1.10",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-lintpack/lintpack@v0.5.2",
					"Name": "github.com/go-lintpack/lintpack",
					"Version": "0.5.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-logfmt/logfmt@v0.5.1",
					"Name": "github.com/go-logfmt/logfmt",
					"Version": "0.5.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-logr/logr@v1.2.3",
					"Name": "github.com/go-logr/logr",
					"Version": "1.2.3",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-logr/stdr@v1.2.2",
					"Name": "github.com/go-logr/stdr",
					"Version": "1.2.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-logr/logr@v1.2.3"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-logr/zapr@v1.2.3",
					"Name": "github.com/go-logr/zapr",
					"Version": "1.2.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-ole/go-ole@v1.2.6",
					"Name": "github.com/go-ole/go-ole",
					"Version": "1.2.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-openapi/analysis@v0.21.4",
					"Name": "github.com/go-openapi/analysis",
					"Version": "0.21.4",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-openapi/strfmt@v0.21.3",
						"github.com/go-openapi/swag@v0.22.3",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/go-openapi/jsonpointer@v0.19.5",
						"github.com/go-openapi/spec@v0.20.7"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-openapi/errors@v0.20.3",
					"Name": "github.com/go-openapi/errors",
					"Version": "0.20.3",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-openapi/jsonpointer@v0.19.5",
					"Name": "github.com/go-openapi/jsonpointer",
					"Version": "0.19.5",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-openapi/swag@v0.22.3",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-openapi/jsonreference@v0.20.0",
					"Name": "github.com/go-openapi/jsonreference",
					"Version": "0.20.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-openapi/jsonpointer@v0.19.5",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-openapi/loads@v0.21.2",
					"Name": "github.com/go-openapi/loads",
					"Version": "0.21.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-openapi/swag@v0.22.3",
						"github.com/stretchr/testify@v1.8.1",
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/go-openapi/analysis@v0.21.4",
						"github.com/go-openapi/spec@v0.20.7"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-openapi/runtime@v0.25.0",
					"Name": "github.com/go-openapi/runtime",
					"Version": "0.25.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-openapi/errors@v0.20.3",
						"go.opentelemetry.io/otel@v1.11.1",
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/docker/go-units@v0.5.0",
						"github.com/go-openapi/spec@v0.20.7",
						"github.com/go-openapi/validate@v0.22.0",
						"go.opentelemetry.io/otel/sdk@v1.11.1",
						"go.opentelemetry.io/otel/trace@v1.11.1",
						"github.com/go-openapi/analysis@v0.21.4",
						"github.com/go-openapi/strfmt@v0.21.3",
						"github.com/opentracing/opentracing-go@v1.2.0",
						"github.com/go-openapi/swag@v0.22.3",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/go-openapi/loads@v0.21.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-openapi/spec@v0.20.7",
					"Name": "github.com/go-openapi/spec",
					"Version": "0.20.7",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-openapi/jsonpointer@v0.19.5",
						"github.com/go-openapi/jsonreference@v0.20.0",
						"github.com/go-openapi/swag@v0.22.3",
						"github.com/stretchr/testify@v1.8.1",
						"gopkg.in/yaml.v2@v2.4.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-openapi/strfmt@v0.21.3",
					"Name": "github.com/go-openapi/strfmt",
					"Version": "0.21.3",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/asaskevich/govalidator@v0.0.0-20210307081110-f21760c49a8d",
						"github.com/go-openapi/errors@v0.20.3",
						"github.com/google/uuid@v1.3.0",
						"github.com/mitchellh/mapstructure@v1.5.0",
						"github.com/oklog/ulid@v1.3.1",
						"github.com/stretchr/testify@v1.8.1",
						"go.mongodb.org/mongo-driver@v1.10.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-openapi/swag@v0.22.3",
					"Name": "github.com/go-openapi/swag",
					"Version": "0.22.3",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"gopkg.in/yaml.v3@v3.0.1",
						"github.com/mailru/easyjson@v0.7.7",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-openapi/validate@v0.22.0",
					"Name": "github.com/go-openapi/validate",
					"Version": "0.22.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-openapi/jsonpointer@v0.19.5",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/go-openapi/analysis@v0.21.4",
						"github.com/go-openapi/errors@v0.20.3",
						"github.com/go-openapi/loads@v0.21.2",
						"github.com/go-openapi/spec@v0.20.7",
						"github.com/go-openapi/strfmt@v0.21.3",
						"github.com/go-openapi/swag@v0.22.3",
						"gopkg.in/yaml.v2@v2.4.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-piv/piv-go@v1.10.0",
					"Name": "github.com/go-piv/piv-go",
					"Version": "1.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-playground/assert/v2@v2.0.1",
					"Name": "github.com/go-playground/assert/v2",
					"Version": "2.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-playground/locales@v0.14.0",
					"Name": "github.com/go-playground/locales",
					"Version": "0.14.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/text@v0.7.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-playground/universal-translator@v0.18.0",
					"Name": "github.com/go-playground/universal-translator",
					"Version": "0.18.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-playground/locales@v0.14.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-playground/validator/v10@v10.11.1",
					"Name": "github.com/go-playground/validator/v10",
					"Version": "10.11.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-redis/redis@v6.15.9+incompatible",
					"Name": "github.com/go-redis/redis",
					"Version": "6.15.9+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-redis/redis/v8@v8.11.5",
					"Name": "github.com/go-redis/redis/v8",
					"Version": "8.11.5",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/onsi/ginkgo@v1.16.5",
						"github.com/onsi/gomega@v1.23.0",
						"github.com/cespare/xxhash/v2@v2.1.2",
						"github.com/dgryski/go-rendezvous@v0.0.0-20200823014737-9f7001d12a5f"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/go-rod/rod@v0.111.0",
					"Name": "github.com/go-rod/rod",
					"Version": "0.111.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-sql-driver/mysql@v1.6.0",
					"Name": "github.com/go-sql-driver/mysql",
					"Version": "1.6.0",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-stack/stack@v1.8.1",
					"Name": "github.com/go-stack/stack",
					"Version": "1.8.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-task/slim-sprig@v0.0.0-20210107165309-348f09dbbbc0",
					"Name": "github.com/go-task/slim-sprig",
					"Version": "0.0.0-20210107165309-348f09dbbbc0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-test/deep@v1.0.8",
					"Name": "github.com/go-test/deep",
					"Version": "1.0.8",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-toolsmith/astcast@v1.0.0",
					"Name": "github.com/go-toolsmith/astcast",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-toolsmith/astcopy@v1.0.0",
					"Name": "github.com/go-toolsmith/astcopy",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-toolsmith/astequal@v1.0.1",
					"Name": "github.com/go-toolsmith/astequal",
					"Version": "1.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-toolsmith/astfmt@v1.0.0",
					"Name": "github.com/go-toolsmith/astfmt",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-toolsmith/astinfo@v0.0.0-20180906194353-9809ff7efb21",
					"Name": "github.com/go-toolsmith/astinfo",
					"Version": "0.0.0-20180906194353-9809ff7efb21",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-toolsmith/astp@v1.0.0",
					"Name": "github.com/go-toolsmith/astp",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-toolsmith/pkgload@v1.0.0",
					"Name": "github.com/go-toolsmith/pkgload",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-toolsmith/strparse@v1.0.0",
					"Name": "github.com/go-toolsmith/strparse",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-toolsmith/typep@v1.0.2",
					"Name": "github.com/go-toolsmith/typep",
					"Version": "1.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/go-xmlfmt/xmlfmt@v0.0.0-20191208150333-d5b6f63a941b",
					"Name": "github.com/go-xmlfmt/xmlfmt",
					"Version": "0.0.0-20191208150333-d5b6f63a941b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/attrs@v1.0.2",
					"Name": "github.com/gobuffalo/attrs",
					"Version": "1.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/depgen@v0.1.0",
					"Name": "github.com/gobuffalo/depgen",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/envy@v1.10.1",
					"Name": "github.com/gobuffalo/envy",
					"Version": "1.10.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/fizz@v1.14.2",
					"Name": "github.com/gobuffalo/fizz",
					"Version": "1.14.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/flect@v0.2.5",
					"Name": "github.com/gobuffalo/flect",
					"Version": "0.2.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/genny@v0.1.1",
					"Name": "github.com/gobuffalo/genny",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/genny/v2@v2.0.12",
					"Name": "github.com/gobuffalo/genny/v2",
					"Version": "2.0.12",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/gitgen@v0.0.0-20190315122116-cc086187d211",
					"Name": "github.com/gobuffalo/gitgen",
					"Version": "0.0.0-20190315122116-cc086187d211",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/github_flavored_markdown@v1.1.1",
					"Name": "github.com/gobuffalo/github_flavored_markdown",
					"Version": "1.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/gogen@v0.1.1",
					"Name": "github.com/gobuffalo/gogen",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/helpers@v0.6.5",
					"Name": "github.com/gobuffalo/helpers",
					"Version": "0.6.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/logger@v1.0.6",
					"Name": "github.com/gobuffalo/logger",
					"Version": "1.0.6",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/term@v0.5.0",
						"github.com/sirupsen/logrus@v1.9.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/mapi@v1.0.2",
					"Name": "github.com/gobuffalo/mapi",
					"Version": "1.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/nulls@v0.4.1",
					"Name": "github.com/gobuffalo/nulls",
					"Version": "0.4.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/packd@v1.0.1",
					"Name": "github.com/gobuffalo/packd",
					"Version": "1.0.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/packr/v2@v2.8.3",
					"Name": "github.com/gobuffalo/packr/v2",
					"Version": "2.8.3",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/markbates/errx@v1.1.0",
						"github.com/markbates/oncer@v1.0.0",
						"github.com/markbates/safe@v1.0.1",
						"github.com/sirupsen/logrus@v1.9.0",
						"github.com/spf13/cobra@v1.6.1",
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/sync@v0.1.0",
						"github.com/gobuffalo/logger@v1.0.6",
						"github.com/karrick/godirwalk@v1.16.1",
						"github.com/rogpeppe/go-internal@v1.8.1",
						"golang.org/x/tools@v0.2.0",
						"github.com/gobuffalo/packd@v1.0.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/plush/v4@v4.1.13",
					"Name": "github.com/gobuffalo/plush/v4",
					"Version": "4.1.13",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/pop/v5@v5.3.1",
					"Name": "github.com/gobuffalo/pop/v5",
					"Version": "5.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/pop/v6@v6.0.6",
					"Name": "github.com/gobuffalo/pop/v6",
					"Version": "6.0.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/syncx@v0.0.0-20190224160051-33c29581e754",
					"Name": "github.com/gobuffalo/syncx",
					"Version": "0.0.0-20190224160051-33c29581e754",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/tags/v3@v3.1.3",
					"Name": "github.com/gobuffalo/tags/v3",
					"Version": "3.1.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobuffalo/validate/v3@v3.3.2",
					"Name": "github.com/gobuffalo/validate/v3",
					"Version": "3.3.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobwas/glob@v0.2.3",
					"Name": "github.com/gobwas/glob",
					"Version": "0.2.3",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobwas/httphead@v0.0.0-20180130184737-2c6c146eadee",
					"Name": "github.com/gobwas/httphead",
					"Version": "0.0.0-20180130184737-2c6c146eadee",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobwas/pool@v0.2.0",
					"Name": "github.com/gobwas/pool",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gobwas/ws@v1.0.2",
					"Name": "github.com/gobwas/ws",
					"Version": "1.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/goccy/go-json@v0.9.7",
					"Name": "github.com/goccy/go-json",
					"Version": "0.9.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/goccy/go-yaml@v1.8.2",
					"Name": "github.com/goccy/go-yaml",
					"Version": "1.8.2",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"gopkg.in/go-playground/validator.v9@v9.31.0",
						"github.com/fatih/color@v1.13.0",
						"github.com/mattn/go-colorable@v0.1.13",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/godbus/dbus@v4.1.0+incompatible",
					"Name": "github.com/godbus/dbus",
					"Version": "4.1.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/godbus/dbus/v5@v5.0.6",
					"Name": "github.com/godbus/dbus/v5",
					"Version": "5.0.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/godror/godror@v0.24.2",
					"Name": "github.com/godror/godror",
					"Version": "0.24.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gofrs/flock@v0.8.1",
					"Name": "github.com/gofrs/flock",
					"Version": "0.8.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gofrs/uuid@v4.2.0+incompatible",
					"Name": "github.com/gofrs/uuid",
					"Version": "4.2.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gogo/googleapis@v1.4.1",
					"Name": "github.com/gogo/googleapis",
					"Version": "1.4.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/gogo/protobuf@v1.3.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/gogo/protobuf@v1.3.2",
					"Name": "github.com/gogo/protobuf",
					"Version": "1.3.2",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golang-jwt/jwt@v3.2.2+incompatible",
					"Name": "github.com/golang-jwt/jwt",
					"Version": "3.2.2+incompatible",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golang-jwt/jwt/v4@v4.4.2",
					"Name": "github.com/golang-jwt/jwt/v4",
					"Version": "4.4.2",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golang-sql/civil@v0.0.0-20190719163853-cb61b32ac6fe",
					"Name": "github.com/golang-sql/civil",
					"Version": "0.0.0-20190719163853-cb61b32ac6fe",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golang/freetype@v0.0.0-20170609003504-e2365dfdc4a0",
					"Name": "github.com/golang/freetype",
					"Version": "0.0.0-20170609003504-e2365dfdc4a0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golang/glog@v1.0.0",
					"Name": "github.com/golang/glog",
					"Version": "1.0.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golang/groupcache@v0.0.0-20210331224755-41bb18bfe9da",
					"Name": "github.com/golang/groupcache",
					"Version": "0.0.0-20210331224755-41bb18bfe9da",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golang/lint@v0.0.0-20180702182130-06c8688daad7",
					"Name": "github.com/golang/lint",
					"Version": "0.0.0-20180702182130-06c8688daad7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golang/mock@v1.6.0",
					"Name": "github.com/golang/mock",
					"Version": "1.6.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/mod@v0.8.0",
						"golang.org/x/tools@v0.2.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/golang/protobuf@v1.5.2",
					"Name": "github.com/golang/protobuf",
					"Version": "1.5.2",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/google/go-cmp@v0.5.9",
						"google.golang.org/protobuf@v1.28.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/golang/snappy@v0.0.4",
					"Name": "github.com/golang/snappy",
					"Version": "0.0.4",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/check@v0.0.0-20180506172741-cfe4005ccda2",
					"Name": "github.com/golangci/check",
					"Version": "0.0.0-20180506172741-cfe4005ccda2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/dupl@v0.0.0-20180902072040-3e9179ac440a",
					"Name": "github.com/golangci/dupl",
					"Version": "0.0.0-20180902072040-3e9179ac440a",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/errcheck@v0.0.0-20181223084120-ef45e06d44b6",
					"Name": "github.com/golangci/errcheck",
					"Version": "0.0.0-20181223084120-ef45e06d44b6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/go-misc@v0.0.0-20180628070357-927a3d87b613",
					"Name": "github.com/golangci/go-misc",
					"Version": "0.0.0-20180628070357-927a3d87b613",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/goconst@v0.0.0-20180610141641-041c5f2b40f3",
					"Name": "github.com/golangci/goconst",
					"Version": "0.0.0-20180610141641-041c5f2b40f3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/gocyclo@v0.0.0-20180528144436-0a533e8fa43d",
					"Name": "github.com/golangci/gocyclo",
					"Version": "0.0.0-20180528144436-0a533e8fa43d",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/gofmt@v0.0.0-20190930125516-244bba706f1a",
					"Name": "github.com/golangci/gofmt",
					"Version": "0.0.0-20190930125516-244bba706f1a",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/golangci-lint@v1.43.0",
					"Name": "github.com/golangci/golangci-lint",
					"Version": "1.43.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/ineffassign@v0.0.0-20190609212857-42439a7714cc",
					"Name": "github.com/golangci/ineffassign",
					"Version": "0.0.0-20190609212857-42439a7714cc",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/lint-1@v0.0.0-20191013205115-297bf364a8e0",
					"Name": "github.com/golangci/lint-1",
					"Version": "0.0.0-20191013205115-297bf364a8e0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/maligned@v0.0.0-20180506175553-b1d89398deca",
					"Name": "github.com/golangci/maligned",
					"Version": "0.0.0-20180506175553-b1d89398deca",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/misspell@v0.3.5",
					"Name": "github.com/golangci/misspell",
					"Version": "0.3.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/prealloc@v0.0.0-20180630174525-215b22d4de21",
					"Name": "github.com/golangci/prealloc",
					"Version": "0.0.0-20180630174525-215b22d4de21",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/revgrep@v0.0.0-20210930125155-c22e5001d4f2",
					"Name": "github.com/golangci/revgrep",
					"Version": "0.0.0-20210930125155-c22e5001d4f2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangci/unconvert@v0.0.0-20180507085042-28b1c447d1f4",
					"Name": "github.com/golangci/unconvert",
					"Version": "0.0.0-20180507085042-28b1c447d1f4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangplus/bytes@v1.0.0",
					"Name": "github.com/golangplus/bytes",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangplus/fmt@v1.0.0",
					"Name": "github.com/golangplus/fmt",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/golangplus/testing@v1.0.0",
					"Name": "github.com/golangplus/testing",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gomodule/redigo@v1.8.2",
					"Name": "github.com/gomodule/redigo",
					"Version": "1.8.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/google/btree@v1.1.2",
					"Name": "github.com/google/btree",
					"Version": "1.1.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/cel-go@v0.12.5",
					"Name": "github.com/google/cel-go",
					"Version": "0.12.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/certificate-transparency-go@v1.1.1",
					"Name": "github.com/google/certificate-transparency-go",
					"Version": "1.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/crfs@v0.0.0-20191108021818-71d77da419c9",
					"Name": "github.com/google/crfs",
					"Version": "0.0.0-20191108021818-71d77da419c9",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/flatbuffers@v1.12.1",
					"Name": "github.com/google/flatbuffers",
					"Version": "1.12.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/gnostic@v0.5.7-v3refs",
					"Name": "github.com/google/gnostic",
					"Version": "0.5.7-v3refs",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
						"google.golang.org/protobuf@v1.28.1",
						"gopkg.in/check.v1@v1.0.0-20201130134442-10cb98267c6c",
						"gopkg.in/yaml.v3@v3.0.1",
						"github.com/docopt/docopt-go@v0.0.0-20180111231733-ee0de3bc6815",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/stoewer/go-strcase@v1.2.0",
						"golang.org/x/tools@v0.2.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/google/go-cmp@v0.5.9",
					"Name": "github.com/google/go-cmp",
					"Version": "0.5.9",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/go-containerregistry@v0.12.0",
					"Name": "github.com/google/go-containerregistry",
					"Version": "0.12.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/spf13/cobra@v1.6.1",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/containerd/stargz-snapshotter/estargz@v0.13.0",
						"golang.org/x/sync@v0.1.0",
						"github.com/mitchellh/go-homedir@v1.1.0",
						"github.com/opencontainers/go-digest@v1.0.0",
						"golang.org/x/tools@v0.2.0",
						"golang.org/x/oauth2@v0.1.0",
						"github.com/docker/cli@v23.0.0-rc.1+incompatible",
						"github.com/docker/distribution@v2.8.1+incompatible",
						"github.com/docker/docker@v23.0.0-rc.1+incompatible",
						"github.com/opencontainers/image-spec@v1.1.0-rc2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/google/go-github@v17.0.0+incompatible",
					"Name": "github.com/google/go-github",
					"Version": "17.0.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/go-github/v28@v28.1.1",
					"Name": "github.com/google/go-github/v28",
					"Version": "28.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/go-licenses@v0.0.0-20210329231322-ce1d9163b77d",
					"Name": "github.com/google/go-licenses",
					"Version": "0.0.0-20210329231322-ce1d9163b77d",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/go-querystring@v1.0.0",
					"Name": "github.com/google/go-querystring",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/go-replayers/grpcreplay@v1.1.0",
					"Name": "github.com/google/go-replayers/grpcreplay",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/go-replayers/httpreplay@v1.0.0",
					"Name": "github.com/google/go-replayers/httpreplay",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/gofuzz@v1.2.0",
					"Name": "github.com/google/gofuzz",
					"Version": "1.2.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/licenseclassifier@v0.0.0-20210325184830-bb04aff29e72",
					"Name": "github.com/google/licenseclassifier",
					"Version": "0.0.0-20210325184830-bb04aff29e72",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/google/go-cmp@v0.5.9",
						"github.com/sergi/go-diff@v1.2.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/google/licenseclassifier/v2@v2.0.0",
					"Name": "github.com/google/licenseclassifier/v2",
					"Version": "2.0.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/sergi/go-diff@v1.2.0",
						"github.com/davecgh/go-spew@v1.1.1",
						"github.com/google/go-cmp@v0.5.9"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/google/martian@v2.1.1-0.20190517191504-25dcb96d9e51+incompatible",
					"Name": "github.com/google/martian",
					"Version": "2.1.1-0.20190517191504-25dcb96d9e51+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/martian/v3@v3.3.2",
					"Name": "github.com/google/martian/v3",
					"Version": "3.3.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/pprof@v0.0.0-20221118152302-e6195bd50e26",
					"Name": "github.com/google/pprof",
					"Version": "0.0.0-20221118152302-e6195bd50e26",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/chzyer/readline@v1.5.0",
						"github.com/ianlancetaylor/demangle@v0.0.0-20220319035150-800ac71e25c2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/google/renameio@v0.1.0",
					"Name": "github.com/google/renameio",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/rpmpack@v0.0.0-20210518075352-dc539ef4f2ea",
					"Name": "github.com/google/rpmpack",
					"Version": "0.0.0-20210518075352-dc539ef4f2ea",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/shlex@v0.0.0-20191202100458-e7afc7fbc510",
					"Name": "github.com/google/shlex",
					"Version": "0.0.0-20191202100458-e7afc7fbc510",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/subcommands@v1.0.1",
					"Name": "github.com/google/subcommands",
					"Version": "1.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/trillian@v1.5.0",
					"Name": "github.com/google/trillian",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/uuid@v1.3.0",
					"Name": "github.com/google/uuid",
					"Version": "1.3.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/google/wire@v0.5.0",
					"Name": "github.com/google/wire",
					"Version": "0.5.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/pmezard/go-difflib@v1.0.0",
						"golang.org/x/tools@v0.2.0",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/google/subcommands@v1.0.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/googleapis/enterprise-certificate-proxy@v0.2.1",
					"Name": "github.com/googleapis/enterprise-certificate-proxy",
					"Version": "0.2.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/googleapis/gax-go@v2.0.2+incompatible",
					"Name": "github.com/googleapis/gax-go",
					"Version": "2.0.2+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/googleapis/gax-go/v2@v2.7.0",
					"Name": "github.com/googleapis/gax-go/v2",
					"Version": "2.7.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"google.golang.org/api@v0.107.0",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
						"github.com/google/go-cmp@v0.5.9",
						"google.golang.org/protobuf@v1.28.1",
						"google.golang.org/grpc@v1.52.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/googleapis/gnostic@v0.5.5",
					"Name": "github.com/googleapis/gnostic",
					"Version": "0.5.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/googleapis/go-type-adapters@v1.0.0",
					"Name": "github.com/googleapis/go-type-adapters",
					"Version": "1.0.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
						"google.golang.org/protobuf@v1.28.1",
						"github.com/golang/protobuf@v1.5.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/googleapis/google-cloud-go-testing@v0.0.0-20200911160855-bcd43fbb19e8",
					"Name": "github.com/googleapis/google-cloud-go-testing",
					"Version": "0.0.0-20200911160855-bcd43fbb19e8",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gookit/color@v1.4.2",
					"Name": "github.com/gookit/color",
					"Version": "1.4.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gophercloud/gophercloud@v0.1.0",
					"Name": "github.com/gophercloud/gophercloud",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gopherjs/gopherjs@v0.0.0-20181017120253-0766667cb4d1",
					"Name": "github.com/gopherjs/gopherjs",
					"Version": "0.0.0-20181017120253-0766667cb4d1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gordonklaus/ineffassign@v0.0.0-20210225214923-2e10b2664254",
					"Name": "github.com/gordonklaus/ineffassign",
					"Version": "0.0.0-20210225214923-2e10b2664254",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/goreleaser/goreleaser@v0.136.0",
					"Name": "github.com/goreleaser/goreleaser",
					"Version": "0.136.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/goreleaser/nfpm@v1.3.0",
					"Name": "github.com/goreleaser/nfpm",
					"Version": "1.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gorhill/cronexpr@v0.0.0-20180427100037-88b0669f7d75",
					"Name": "github.com/gorhill/cronexpr",
					"Version": "0.0.0-20180427100037-88b0669f7d75",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gorilla/context@v1.1.1",
					"Name": "github.com/gorilla/context",
					"Version": "1.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gorilla/css@v1.0.0",
					"Name": "github.com/gorilla/css",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gorilla/handlers@v1.5.1",
					"Name": "github.com/gorilla/handlers",
					"Version": "1.5.1",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/felixge/httpsnoop@v1.0.3"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/gorilla/mux@v1.8.0",
					"Name": "github.com/gorilla/mux",
					"Version": "1.8.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gorilla/websocket@v1.4.2",
					"Name": "github.com/gorilla/websocket",
					"Version": "1.4.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gostaticanalysis/analysisutil@v0.7.1",
					"Name": "github.com/gostaticanalysis/analysisutil",
					"Version": "0.7.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gostaticanalysis/comment@v1.4.2",
					"Name": "github.com/gostaticanalysis/comment",
					"Version": "1.4.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gostaticanalysis/forcetypeassert@v0.0.0-20200621232751-01d4955beaa5",
					"Name": "github.com/gostaticanalysis/forcetypeassert",
					"Version": "0.0.0-20200621232751-01d4955beaa5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gostaticanalysis/nilerr@v0.1.1",
					"Name": "github.com/gostaticanalysis/nilerr",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gostaticanalysis/testutil@v0.4.0",
					"Name": "github.com/gostaticanalysis/testutil",
					"Version": "0.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gosuri/uitable@v0.0.4",
					"Name": "github.com/gosuri/uitable",
					"Version": "0.0.4",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gotestyourself/gotestyourself@v2.2.0+incompatible",
					"Name": "github.com/gotestyourself/gotestyourself",
					"Version": "2.2.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/gregjones/httpcache@v0.0.0-20190611155906-901d90724c79",
					"Name": "github.com/gregjones/httpcache",
					"Version": "0.0.0-20190611155906-901d90724c79",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/grpc-ecosystem/go-grpc-middleware@v1.3.0",
					"Name": "github.com/grpc-ecosystem/go-grpc-middleware",
					"Version": "1.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/grpc-ecosystem/go-grpc-prometheus@v1.2.0",
					"Name": "github.com/grpc-ecosystem/go-grpc-prometheus",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/grpc-ecosystem/grpc-gateway@v1.16.0",
					"Name": "github.com/grpc-ecosystem/grpc-gateway",
					"Version": "1.16.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/grpc-ecosystem/grpc-gateway/v2@v2.7.0",
					"Name": "github.com/grpc-ecosystem/grpc-gateway/v2",
					"Version": "2.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/grpc-ecosystem/grpc-opentracing@v0.0.0-20180507213350-8e809c8a8645",
					"Name": "github.com/grpc-ecosystem/grpc-opentracing",
					"Version": "0.0.0-20180507213350-8e809c8a8645",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hanwen/go-fuse@v1.0.0",
					"Name": "github.com/hanwen/go-fuse",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hanwen/go-fuse/v2@v2.1.1-0.20220112183258-f57e95bda82d",
					"Name": "github.com/hanwen/go-fuse/v2",
					"Version": "2.1.1-0.20220112183258-f57e95bda82d",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/consul/api@v1.18.0",
					"Name": "github.com/hashicorp/consul/api",
					"Version": "1.18.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/consul/sdk@v0.13.0",
					"Name": "github.com/hashicorp/consul/sdk",
					"Version": "0.13.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/errwrap@v1.1.0",
					"Name": "github.com/hashicorp/errwrap",
					"Version": "1.1.0",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-cleanhttp@v0.5.2",
					"Name": "github.com/hashicorp/go-cleanhttp",
					"Version": "0.5.2",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-getter@v1.7.0",
					"Name": "github.com/hashicorp/go-getter",
					"Version": "1.7.0",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/ulikunitz/xz@v0.5.10",
						"cloud.google.com/go/storage@v1.27.0",
						"github.com/aws/aws-sdk-go@v1.44.210",
						"github.com/cheggaaa/pb@v1.0.27",
						"github.com/hashicorp/go-safetemp@v1.0.0",
						"github.com/mitchellh/go-homedir@v1.1.0",
						"golang.org/x/oauth2@v0.1.0",
						"google.golang.org/api@v0.107.0",
						"github.com/bgentry/go-netrc@v0.0.0-20140422174119-9fd32a8b3d3d",
						"github.com/hashicorp/go-cleanhttp@v0.5.2",
						"github.com/hashicorp/go-version@v1.6.0",
						"github.com/klauspost/compress@v1.15.12",
						"github.com/mitchellh/go-testing-interface@v1.14.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-hclog@v1.3.1",
					"Name": "github.com/hashicorp/go-hclog",
					"Version": "1.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-immutable-radix@v1.3.1",
					"Name": "github.com/hashicorp/go-immutable-radix",
					"Version": "1.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-kms-wrapping/entropy/v2@v2.0.0",
					"Name": "github.com/hashicorp/go-kms-wrapping/entropy/v2",
					"Version": "2.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-msgpack@v0.5.3",
					"Name": "github.com/hashicorp/go-msgpack",
					"Version": "0.5.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-multierror@v1.1.1",
					"Name": "github.com/hashicorp/go-multierror",
					"Version": "1.1.1",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/hashicorp/errwrap@v1.1.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-plugin@v1.4.5",
					"Name": "github.com/hashicorp/go-plugin",
					"Version": "1.4.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-retryablehttp@v0.7.2",
					"Name": "github.com/hashicorp/go-retryablehttp",
					"Version": "0.7.2",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/hashicorp/go-cleanhttp@v0.5.2",
						"github.com/hashicorp/go-hclog@v1.3.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-rootcerts@v1.0.2",
					"Name": "github.com/hashicorp/go-rootcerts",
					"Version": "1.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-safetemp@v1.0.0",
					"Name": "github.com/hashicorp/go-safetemp",
					"Version": "1.0.0",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-secure-stdlib/base62@v0.1.1",
					"Name": "github.com/hashicorp/go-secure-stdlib/base62",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-secure-stdlib/mlock@v0.1.2",
					"Name": "github.com/hashicorp/go-secure-stdlib/mlock",
					"Version": "0.1.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-secure-stdlib/parseutil@v0.1.7",
					"Name": "github.com/hashicorp/go-secure-stdlib/parseutil",
					"Version": "0.1.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-secure-stdlib/password@v0.1.1",
					"Name": "github.com/hashicorp/go-secure-stdlib/password",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-secure-stdlib/strutil@v0.1.2",
					"Name": "github.com/hashicorp/go-secure-stdlib/strutil",
					"Version": "0.1.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-secure-stdlib/tlsutil@v0.1.1",
					"Name": "github.com/hashicorp/go-secure-stdlib/tlsutil",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-sockaddr@v1.0.2",
					"Name": "github.com/hashicorp/go-sockaddr",
					"Version": "1.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-syslog@v1.0.0",
					"Name": "github.com/hashicorp/go-syslog",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-uuid@v1.0.3",
					"Name": "github.com/hashicorp/go-uuid",
					"Version": "1.0.3",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go-version@v1.6.0",
					"Name": "github.com/hashicorp/go-version",
					"Version": "1.6.0",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/go.net@v0.0.1",
					"Name": "github.com/hashicorp/go.net",
					"Version": "0.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/golang-lru@v0.5.4",
					"Name": "github.com/hashicorp/golang-lru",
					"Version": "0.5.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/golang-lru/v2@v2.0.1",
					"Name": "github.com/hashicorp/golang-lru/v2",
					"Version": "2.0.1",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/hcl@v1.0.0",
					"Name": "github.com/hashicorp/hcl",
					"Version": "1.0.0",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/davecgh/go-spew@v1.1.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/hcl/v2@v2.14.1",
					"Name": "github.com/hashicorp/hcl/v2",
					"Version": "2.14.1",
					"Licenses": [
						"MPL-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/apparentlymart/go-textseg/v13@v13.0.0",
						"github.com/davecgh/go-spew@v1.1.1",
						"github.com/kylelemons/godebug@v1.1.0",
						"github.com/zclconf/go-cty@v1.10.0",
						"github.com/agext/levenshtein@v1.2.3",
						"github.com/apparentlymart/go-dump@v0.0.0-20180507223929-23540a00eaa3",
						"github.com/go-test/deep@v1.0.8",
						"github.com/sergi/go-diff@v1.2.0",
						"github.com/spf13/pflag@v1.0.5",
						"github.com/zclconf/go-cty-debug@v0.0.0-20191215020915-b22d67c1ba0b",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/kr/pretty@v0.3.0",
						"github.com/mitchellh/go-wordwrap@v1.0.1",
						"golang.org/x/crypto@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/logutils@v1.0.0",
					"Name": "github.com/hashicorp/logutils",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/mdns@v1.0.4",
					"Name": "github.com/hashicorp/mdns",
					"Version": "1.0.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/memberlist@v0.5.0",
					"Name": "github.com/hashicorp/memberlist",
					"Version": "0.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/serf@v0.10.1",
					"Name": "github.com/hashicorp/serf",
					"Version": "0.10.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/uuid@v0.0.0-20160311170451-ebb0a03e909c",
					"Name": "github.com/hashicorp/uuid",
					"Version": "0.0.0-20160311170451-ebb0a03e909c",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/vault/api@v1.8.0",
					"Name": "github.com/hashicorp/vault/api",
					"Version": "1.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/vault/sdk@v0.6.0",
					"Name": "github.com/hashicorp/vault/sdk",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hashicorp/yamux@v0.1.1",
					"Name": "github.com/hashicorp/yamux",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hhatto/gorst@v0.0.0-20181029133204-ca9f730cac5b",
					"Name": "github.com/hhatto/gorst",
					"Version": "0.0.0-20181029133204-ca9f730cac5b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/honeycombio/beeline-go@v1.10.0",
					"Name": "github.com/honeycombio/beeline-go",
					"Version": "1.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/honeycombio/libhoney-go@v1.16.0",
					"Name": "github.com/honeycombio/libhoney-go",
					"Version": "1.16.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/howeyc/gopass@v0.0.0-20190910152052-7cb4b85ec19c",
					"Name": "github.com/howeyc/gopass",
					"Version": "0.0.0-20190910152052-7cb4b85ec19c",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/hpcloud/tail@v1.0.0",
					"Name": "github.com/hpcloud/tail",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/huandu/xstrings@v1.3.3",
					"Name": "github.com/huandu/xstrings",
					"Version": "1.3.3",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/iancoleman/strcase@v0.2.0",
					"Name": "github.com/iancoleman/strcase",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ianlancetaylor/demangle@v0.0.0-20220319035150-800ac71e25c2",
					"Name": "github.com/ianlancetaylor/demangle",
					"Version": "0.0.0-20220319035150-800ac71e25c2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/imdario/mergo@v0.3.13",
					"Name": "github.com/imdario/mergo",
					"Version": "0.3.13",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"gopkg.in/yaml.v3@v3.0.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/in-toto/in-toto-golang@v0.5.0",
					"Name": "github.com/in-toto/in-toto-golang",
					"Version": "0.5.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/spf13/cobra@v1.6.1",
						"golang.org/x/sys@v0.5.0",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/spiffe/go-spiffe/v2@v2.1.1",
						"google.golang.org/grpc@v1.52.0",
						"github.com/secure-systems-lab/go-securesystemslib@v0.4.0",
						"github.com/shibumi/go-pathspec@v1.3.0",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/inconshreveable/mousetrap@v1.0.1",
					"Name": "github.com/inconshreveable/mousetrap",
					"Version": "1.0.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/intel/goresctrl@v0.2.0",
					"Name": "github.com/intel/goresctrl",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ishidawataru/sctp@v0.0.0-20191218070446-00ab2ac2db07",
					"Name": "github.com/ishidawataru/sctp",
					"Version": "0.0.0-20191218070446-00ab2ac2db07",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/j-keck/arping@v1.0.2",
					"Name": "github.com/j-keck/arping",
					"Version": "1.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/chunkreader@v1.0.0",
					"Name": "github.com/jackc/chunkreader",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/chunkreader/v2@v2.0.1",
					"Name": "github.com/jackc/chunkreader/v2",
					"Version": "2.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/pgconn@v1.12.1",
					"Name": "github.com/jackc/pgconn",
					"Version": "1.12.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/pgio@v1.0.0",
					"Name": "github.com/jackc/pgio",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/pgmock@v0.0.0-20210724152146-4ad1a8207f65",
					"Name": "github.com/jackc/pgmock",
					"Version": "0.0.0-20210724152146-4ad1a8207f65",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/pgpassfile@v1.0.0",
					"Name": "github.com/jackc/pgpassfile",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/pgproto3@v1.1.0",
					"Name": "github.com/jackc/pgproto3",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/pgproto3/v2@v2.3.0",
					"Name": "github.com/jackc/pgproto3/v2",
					"Version": "2.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/pgservicefile@v0.0.0-20200714003250-2b9c44734f2b",
					"Name": "github.com/jackc/pgservicefile",
					"Version": "0.0.0-20200714003250-2b9c44734f2b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/pgtype@v1.11.0",
					"Name": "github.com/jackc/pgtype",
					"Version": "1.11.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/pgx@v3.6.2+incompatible",
					"Name": "github.com/jackc/pgx",
					"Version": "3.6.2+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/pgx/v4@v4.16.1",
					"Name": "github.com/jackc/pgx/v4",
					"Version": "4.16.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jackc/puddle@v1.2.1",
					"Name": "github.com/jackc/puddle",
					"Version": "1.2.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jaguilar/vt100@v0.0.0-20150826170717-2703a27b14ea",
					"Name": "github.com/jaguilar/vt100",
					"Version": "0.0.0-20150826170717-2703a27b14ea",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jarcoal/httpmock@v1.0.5",
					"Name": "github.com/jarcoal/httpmock",
					"Version": "1.0.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jbenet/go-context@v0.0.0-20150711004518-d14ea06fba99",
					"Name": "github.com/jbenet/go-context",
					"Version": "0.0.0-20150711004518-d14ea06fba99",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jdkato/prose@v1.1.0",
					"Name": "github.com/jdkato/prose",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jedisct1/go-minisign@v0.0.0-20211028175153-1c139d1cc84b",
					"Name": "github.com/jedisct1/go-minisign",
					"Version": "0.0.0-20211028175153-1c139d1cc84b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jellevandenhooff/dkim@v0.0.0-20150330215556-f50fe3d243e1",
					"Name": "github.com/jellevandenhooff/dkim",
					"Version": "0.0.0-20150330215556-f50fe3d243e1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jellydator/ttlcache/v2@v2.11.1",
					"Name": "github.com/jellydator/ttlcache/v2",
					"Version": "2.11.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jessevdk/go-flags@v1.5.0",
					"Name": "github.com/jessevdk/go-flags",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jgautheron/goconst@v1.5.1",
					"Name": "github.com/jgautheron/goconst",
					"Version": "1.5.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jhump/gopoet@v0.1.0",
					"Name": "github.com/jhump/gopoet",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jhump/goprotoc@v0.5.0",
					"Name": "github.com/jhump/goprotoc",
					"Version": "0.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jhump/protoreflect@v1.13.0",
					"Name": "github.com/jhump/protoreflect",
					"Version": "1.13.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jingyugao/rowserrcheck@v1.1.1",
					"Name": "github.com/jingyugao/rowserrcheck",
					"Version": "1.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jirfag/go-printf-func-name@v0.0.0-20200119135958-7558a9eaa5af",
					"Name": "github.com/jirfag/go-printf-func-name",
					"Version": "0.0.0-20200119135958-7558a9eaa5af",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jmespath/go-jmespath@v0.4.0",
					"Name": "github.com/jmespath/go-jmespath",
					"Version": "0.4.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/jmespath/go-jmespath/internal/testify@v1.5.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/jmespath/go-jmespath/internal/testify@v1.5.1",
					"Name": "github.com/jmespath/go-jmespath/internal/testify",
					"Version": "1.5.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/davecgh/go-spew@v1.1.1",
						"github.com/pmezard/go-difflib@v1.0.0",
						"github.com/stretchr/objx@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/jmhodges/clock@v0.0.0-20160418191101-880ee4c33548",
					"Name": "github.com/jmhodges/clock",
					"Version": "0.0.0-20160418191101-880ee4c33548",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jmoiron/sqlx@v1.3.5",
					"Name": "github.com/jmoiron/sqlx",
					"Version": "1.3.5",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-sql-driver/mysql@v1.6.0",
						"github.com/lib/pq@v1.10.7",
						"github.com/mattn/go-sqlite3@v2.0.3+incompatible"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/joefitzgerald/rainbow-reporter@v0.1.0",
					"Name": "github.com/joefitzgerald/rainbow-reporter",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/joho/godotenv@v1.4.0",
					"Name": "github.com/joho/godotenv",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jonboulle/clockwork@v0.3.0",
					"Name": "github.com/jonboulle/clockwork",
					"Version": "0.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/josharian/intern@v1.0.0",
					"Name": "github.com/josharian/intern",
					"Version": "1.0.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/josharian/txtarfs@v0.0.0-20210218200122-0702f000015a",
					"Name": "github.com/josharian/txtarfs",
					"Version": "0.0.0-20210218200122-0702f000015a",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jpillora/backoff@v1.0.0",
					"Name": "github.com/jpillora/backoff",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/json-iterator/go@v1.1.12",
					"Name": "github.com/json-iterator/go",
					"Version": "1.1.12",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/modern-go/reflect2@v1.0.2",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/davecgh/go-spew@v1.1.1",
						"github.com/google/gofuzz@v1.2.0",
						"github.com/modern-go/concurrent@v0.0.0-20180306012644-bacd9c7ef1dd"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/jstemmer/go-junit-report@v0.9.1",
					"Name": "github.com/jstemmer/go-junit-report",
					"Version": "0.9.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jteeuwen/go-bindata@v3.0.8-0.20180305030458-6025e8de665b+incompatible",
					"Name": "github.com/jteeuwen/go-bindata",
					"Version": "3.0.8-0.20180305030458-6025e8de665b+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jtolds/gls@v4.20.0+incompatible",
					"Name": "github.com/jtolds/gls",
					"Version": "4.20.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/juju/ratelimit@v1.0.1",
					"Name": "github.com/juju/ratelimit",
					"Version": "1.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/julienschmidt/httprouter@v1.3.0",
					"Name": "github.com/julienschmidt/httprouter",
					"Version": "1.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/julz/importas@v0.0.0-20210419104244-841f0c0fe66d",
					"Name": "github.com/julz/importas",
					"Version": "0.0.0-20210419104244-841f0c0fe66d",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/jung-kurt/gofpdf@v1.0.3-0.20190309125859-24315acbbda5",
					"Name": "github.com/jung-kurt/gofpdf",
					"Version": "1.0.3-0.20190309125859-24315acbbda5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/k0kubun/colorstring@v0.0.0-20150214042306-9440f1994b88",
					"Name": "github.com/k0kubun/colorstring",
					"Version": "0.0.0-20150214042306-9440f1994b88",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/karrick/godirwalk@v1.16.1",
					"Name": "github.com/karrick/godirwalk",
					"Version": "1.16.1",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kballard/go-shellquote@v0.0.0-20180428030007-95032a82bc51",
					"Name": "github.com/kballard/go-shellquote",
					"Version": "0.0.0-20180428030007-95032a82bc51",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kevinburke/ssh_config@v1.2.0",
					"Name": "github.com/kevinburke/ssh_config",
					"Version": "1.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kisielk/errcheck@v1.6.0",
					"Name": "github.com/kisielk/errcheck",
					"Version": "1.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kisielk/gotool@v1.0.0",
					"Name": "github.com/kisielk/gotool",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/klauspost/compress@v1.15.12",
					"Name": "github.com/klauspost/compress",
					"Version": "1.15.12",
					"Licenses": [
						"Apache-2.0",
						"BSD-3-Clause",
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/klauspost/cpuid@v1.2.0",
					"Name": "github.com/klauspost/cpuid",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/klauspost/pgzip@v1.2.5",
					"Name": "github.com/klauspost/pgzip",
					"Version": "1.2.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/knqyf263/go-apk-version@v0.0.0-20200609155635-041fdbb8563f",
					"Name": "github.com/knqyf263/go-apk-version",
					"Version": "0.0.0-20200609155635-041fdbb8563f",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/knqyf263/go-deb-version@v0.0.0-20230223133812-3ed183d23422",
					"Name": "github.com/knqyf263/go-deb-version",
					"Version": "0.0.0-20230223133812-3ed183d23422",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/knqyf263/go-rpm-version@v0.0.0-20220614171824-631e686d1075",
					"Name": "github.com/knqyf263/go-rpm-version",
					"Version": "0.0.0-20220614171824-631e686d1075",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/knqyf263/go-rpmdb@v0.0.0-20230201142403-697bc51b3948",
					"Name": "github.com/knqyf263/go-rpmdb",
					"Version": "0.0.0-20230201142403-697bc51b3948",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1",
						"github.com/glebarez/go-sqlite@v1.20.3",
						"github.com/hashicorp/go-multierror@v1.1.1",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/knqyf263/nested@v0.0.1",
					"Name": "github.com/knqyf263/nested",
					"Version": "0.0.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/konsorten/go-windows-terminal-sequences@v1.0.3",
					"Name": "github.com/konsorten/go-windows-terminal-sequences",
					"Version": "1.0.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kortschak/utter@v1.0.1",
					"Name": "github.com/kortschak/utter",
					"Version": "1.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kr/fs@v0.1.0",
					"Name": "github.com/kr/fs",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kr/logfmt@v0.0.0-20140226030751-b84e30acd515",
					"Name": "github.com/kr/logfmt",
					"Version": "0.0.0-20140226030751-b84e30acd515",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kr/pretty@v0.3.0",
					"Name": "github.com/kr/pretty",
					"Version": "0.3.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/kr/text@v0.2.0",
						"github.com/rogpeppe/go-internal@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/kr/pty@v1.1.8",
					"Name": "github.com/kr/pty",
					"Version": "1.1.8",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kr/text@v0.2.0",
					"Name": "github.com/kr/text",
					"Version": "0.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/creack/pty@v1.1.18"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/kulti/thelper@v0.4.0",
					"Name": "github.com/kulti/thelper",
					"Version": "0.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kunwardeep/paralleltest@v1.0.3",
					"Name": "github.com/kunwardeep/paralleltest",
					"Version": "1.0.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kylelemons/godebug@v1.1.0",
					"Name": "github.com/kylelemons/godebug",
					"Version": "1.1.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/kyoh86/exportloopref@v0.1.8",
					"Name": "github.com/kyoh86/exportloopref",
					"Version": "0.1.8",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/labstack/echo/v4@v4.7.2",
					"Name": "github.com/labstack/echo/v4",
					"Version": "4.7.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/labstack/gommon@v0.3.1",
					"Name": "github.com/labstack/gommon",
					"Version": "0.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/lann/builder@v0.0.0-20180802200727-47ae307949d0",
					"Name": "github.com/lann/builder",
					"Version": "0.0.0-20180802200727-47ae307949d0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/lann/ps@v0.0.0-20150810152359-62de8c46ede0",
					"Name": "github.com/lann/ps",
					"Version": "0.0.0-20150810152359-62de8c46ede0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ldez/gomoddirectives@v0.2.2",
					"Name": "github.com/ldez/gomoddirectives",
					"Version": "0.2.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ldez/tagliatelle@v0.2.0",
					"Name": "github.com/ldez/tagliatelle",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/leodido/go-urn@v1.2.1",
					"Name": "github.com/leodido/go-urn",
					"Version": "1.2.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/letsencrypt/boulder@v0.0.0-20220929215747-76583552c2be",
					"Name": "github.com/letsencrypt/boulder",
					"Version": "0.0.0-20220929215747-76583552c2be",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/letsencrypt/challtestsrv@v1.2.1",
					"Name": "github.com/letsencrypt/challtestsrv",
					"Version": "1.2.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/letsencrypt/pkcs11key/v4@v4.0.0",
					"Name": "github.com/letsencrypt/pkcs11key/v4",
					"Version": "4.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/liamg/iamgo@v0.0.9",
					"Name": "github.com/liamg/iamgo",
					"Version": "0.0.9",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/liamg/jfather@v0.0.7",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/liamg/jfather@v0.0.7",
					"Name": "github.com/liamg/jfather",
					"Version": "0.0.7",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/liamg/memoryfs@v1.4.3",
					"Name": "github.com/liamg/memoryfs",
					"Version": "1.4.3",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/liamg/tml@v0.6.0",
					"Name": "github.com/liamg/tml",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/lib/pq@v1.10.7",
					"Name": "github.com/lib/pq",
					"Version": "1.10.7",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/liggitt/tabwriter@v0.0.0-20181228230101-89fcab3d43de",
					"Name": "github.com/liggitt/tabwriter",
					"Version": "0.0.0-20181228230101-89fcab3d43de",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/linkedin/goavro@v2.1.0+incompatible",
					"Name": "github.com/linkedin/goavro",
					"Version": "2.1.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/linuxkit/virtsock@v0.0.0-20201010232012-f8cee7dfc7a3",
					"Name": "github.com/linuxkit/virtsock",
					"Version": "0.0.0-20201010232012-f8cee7dfc7a3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/lithammer/dedent@v1.1.0",
					"Name": "github.com/lithammer/dedent",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/logrusorgru/aurora@v0.0.0-20181002194514-a7b3b318ed4e",
					"Name": "github.com/logrusorgru/aurora",
					"Version": "0.0.0-20181002194514-a7b3b318ed4e",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/lufia/plan9stats@v0.0.0-20211012122336-39d0f177ccd0",
					"Name": "github.com/lufia/plan9stats",
					"Version": "0.0.0-20211012122336-39d0f177ccd0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/luna-duclos/instrumentedsql@v1.1.3",
					"Name": "github.com/luna-duclos/instrumentedsql",
					"Version": "1.1.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/lunixbochs/struc@v0.0.0-20200707160740-784aaebc1d40",
					"Name": "github.com/lunixbochs/struc",
					"Version": "0.0.0-20200707160740-784aaebc1d40",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/lyft/protoc-gen-star@v0.5.3",
					"Name": "github.com/lyft/protoc-gen-star",
					"Version": "0.5.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/magefile/mage@v1.13.0",
					"Name": "github.com/magefile/mage",
					"Version": "1.13.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/magiconair/properties@v1.8.7",
					"Name": "github.com/magiconair/properties",
					"Version": "1.8.7",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mailru/easyjson@v0.7.7",
					"Name": "github.com/mailru/easyjson",
					"Version": "0.7.7",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/josharian/intern@v1.0.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/maratori/testpackage@v1.0.1",
					"Name": "github.com/maratori/testpackage",
					"Version": "1.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/markbates/errx@v1.1.0",
					"Name": "github.com/markbates/errx",
					"Version": "1.1.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/markbates/oncer@v1.0.0",
					"Name": "github.com/markbates/oncer",
					"Version": "1.0.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/markbates/safe@v1.0.1",
					"Name": "github.com/markbates/safe",
					"Version": "1.0.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/marstr/guid@v1.1.0",
					"Name": "github.com/marstr/guid",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/masahiro331/go-disk@v0.0.0-20220919035250-c8da316f91ac",
					"Name": "github.com/masahiro331/go-disk",
					"Version": "0.0.0-20220919035250-c8da316f91ac",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/masahiro331/go-ebs-file@v0.0.0-20221225061409-5ef263bb2cc3",
					"Name": "github.com/masahiro331/go-ebs-file",
					"Version": "0.0.0-20221225061409-5ef263bb2cc3",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/aws/aws-sdk-go-v2@v1.17.5",
						"github.com/aws/aws-sdk-go-v2/config@v1.18.15",
						"github.com/aws/aws-sdk-go-v2/service/ebs@v1.15.19"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/masahiro331/go-ext4-filesystem@v0.0.0-20221225060520-c150f5eacfe1",
					"Name": "github.com/masahiro331/go-ext4-filesystem",
					"Version": "0.0.0-20221225060520-c150f5eacfe1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
						"github.com/lunixbochs/struc@v0.0.0-20200707160740-784aaebc1d40"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/masahiro331/go-mvn-version@v0.0.0-20210429150710-d3157d602a08",
					"Name": "github.com/masahiro331/go-mvn-version",
					"Version": "0.0.0-20210429150710-d3157d602a08",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/hashicorp/go-multierror@v1.1.1",
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/masahiro331/go-vmdk-parser@v0.0.0-20221225061455-612096e4bbbd",
					"Name": "github.com/masahiro331/go-vmdk-parser",
					"Version": "0.0.0-20221225061455-612096e4bbbd",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/masahiro331/go-xfs-filesystem@v0.0.0-20221225060805-c02764233454",
					"Name": "github.com/masahiro331/go-xfs-filesystem",
					"Version": "0.0.0-20221225060805-c02764233454",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
						"go.uber.org/zap@v1.24.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/matoous/godox@v0.0.0-20210227103229-6504466cf951",
					"Name": "github.com/matoous/godox",
					"Version": "0.0.0-20210227103229-6504466cf951",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/matryer/is@v1.4.0",
					"Name": "github.com/matryer/is",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mattn/go-colorable@v0.1.13",
					"Name": "github.com/mattn/go-colorable",
					"Version": "0.1.13",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/mattn/go-isatty@v0.0.17"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/mattn/go-ieproxy@v0.0.1",
					"Name": "github.com/mattn/go-ieproxy",
					"Version": "0.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mattn/go-isatty@v0.0.17",
					"Name": "github.com/mattn/go-isatty",
					"Version": "0.0.17",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/mattn/go-oci8@v0.1.1",
					"Name": "github.com/mattn/go-oci8",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mattn/go-runewidth@v0.0.13",
					"Name": "github.com/mattn/go-runewidth",
					"Version": "0.0.13",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/rivo/uniseg@v0.2.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/mattn/go-shellwords@v1.0.12",
					"Name": "github.com/mattn/go-shellwords",
					"Version": "1.0.12",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mattn/go-sqlite3@v2.0.3+incompatible",
					"Name": "github.com/mattn/go-sqlite3",
					"Version": "2.0.3+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mattn/go-zglob@v0.0.1",
					"Name": "github.com/mattn/go-zglob",
					"Version": "0.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mattn/goveralls@v0.0.2",
					"Name": "github.com/mattn/goveralls",
					"Version": "0.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/matttproud/golang_protobuf_extensions@v1.0.4",
					"Name": "github.com/matttproud/golang_protobuf_extensions",
					"Version": "1.0.4",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/golang/protobuf@v1.5.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/maxbrunsfeld/counterfeiter/v6@v6.5.0",
					"Name": "github.com/maxbrunsfeld/counterfeiter/v6",
					"Version": "6.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mbilski/exhaustivestruct@v1.2.0",
					"Name": "github.com/mbilski/exhaustivestruct",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mediocregopher/radix/v4@v4.1.1",
					"Name": "github.com/mediocregopher/radix/v4",
					"Version": "4.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mgechev/dots@v0.0.0-20210922191527-e955255bf517",
					"Name": "github.com/mgechev/dots",
					"Version": "0.0.0-20210922191527-e955255bf517",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mgechev/revive@v1.1.2",
					"Name": "github.com/mgechev/revive",
					"Version": "1.1.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mgutz/ansi@v0.0.0-20170206155736-9520e82c474b",
					"Name": "github.com/mgutz/ansi",
					"Version": "0.0.0-20170206155736-9520e82c474b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mholt/archiver/v3@v3.5.1",
					"Name": "github.com/mholt/archiver/v3",
					"Version": "3.5.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/microcosm-cc/bluemonday@v1.0.16",
					"Name": "github.com/microcosm-cc/bluemonday",
					"Version": "1.0.16",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/microsoft/go-rustaudit@v0.0.0-20220808201409-204dfee52032",
					"Name": "github.com/microsoft/go-rustaudit",
					"Version": "0.0.0-20220808201409-204dfee52032",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/miekg/dns@v1.1.50",
					"Name": "github.com/miekg/dns",
					"Version": "1.1.50",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/miekg/pkcs11@v1.1.1",
					"Name": "github.com/miekg/pkcs11",
					"Version": "1.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mistifyio/go-zfs@v2.1.2-0.20190413222219-f784269be439+incompatible",
					"Name": "github.com/mistifyio/go-zfs",
					"Version": "2.1.2-0.20190413222219-f784269be439+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/cli@v1.1.4",
					"Name": "github.com/mitchellh/cli",
					"Version": "1.1.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/copystructure@v1.2.0",
					"Name": "github.com/mitchellh/copystructure",
					"Version": "1.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/mitchellh/reflectwalk@v1.0.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/go-homedir@v1.1.0",
					"Name": "github.com/mitchellh/go-homedir",
					"Version": "1.1.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/go-ps@v1.0.0",
					"Name": "github.com/mitchellh/go-ps",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/go-testing-interface@v1.14.1",
					"Name": "github.com/mitchellh/go-testing-interface",
					"Version": "1.14.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/go-wordwrap@v1.0.1",
					"Name": "github.com/mitchellh/go-wordwrap",
					"Version": "1.0.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/gox@v0.4.0",
					"Name": "github.com/mitchellh/gox",
					"Version": "0.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/hashstructure@v1.0.0",
					"Name": "github.com/mitchellh/hashstructure",
					"Version": "1.0.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/hashstructure/v2@v2.0.2",
					"Name": "github.com/mitchellh/hashstructure/v2",
					"Version": "2.0.2",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/iochan@v1.0.0",
					"Name": "github.com/mitchellh/iochan",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/mapstructure@v1.5.0",
					"Name": "github.com/mitchellh/mapstructure",
					"Version": "1.5.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/osext@v0.0.0-20151018003038-5e2d6d41470f",
					"Name": "github.com/mitchellh/osext",
					"Version": "0.0.0-20151018003038-5e2d6d41470f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mitchellh/reflectwalk@v1.0.2",
					"Name": "github.com/mitchellh/reflectwalk",
					"Version": "1.0.2",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/moby/buildkit@v0.11.0",
					"Name": "github.com/moby/buildkit",
					"Version": "0.11.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"go.opentelemetry.io/proto/otlp@v0.19.0",
						"github.com/containerd/continuity@v0.3.0",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/hashicorp/go-multierror@v1.1.1",
						"github.com/containerd/stargz-snapshotter/estargz@v0.13.0",
						"github.com/coreos/go-systemd/v22@v22.4.0",
						"github.com/docker/go-connections@v0.4.0",
						"github.com/docker/go-units@v0.5.0",
						"github.com/gogo/protobuf@v1.3.2",
						"go.opentelemetry.io/otel/exporters/otlp/otlptrace@v1.10.0",
						"github.com/Azure/azure-sdk-for-go/sdk/azidentity@v1.1.0",
						"github.com/containerd/console@v1.0.3",
						"github.com/morikuni/aec@v1.0.0",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/aws/aws-sdk-go-v2/service/s3@v1.27.11",
						"github.com/klauspost/compress@v1.15.12",
						"github.com/in-toto/in-toto-golang@v0.5.0",
						"golang.org/x/sys@v0.5.0",
						"github.com/moby/sys/signal@v0.7.0",
						"github.com/pkg/profile@v1.5.0",
						"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp@v1.4.1",
						"google.golang.org/grpc@v1.52.0",
						"github.com/google/shlex@v0.0.0-20191202100458-e7afc7fbc510",
						"github.com/hashicorp/golang-lru@v0.5.4",
						"go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc@v0.35.0",
						"google.golang.org/protobuf@v1.28.1",
						"go.opentelemetry.io/contrib/instrumentation/net/http/httptrace/otelhttptrace@v0.29.0",
						"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc@v1.10.0",
						"github.com/Microsoft/hcsshim@v0.9.6",
						"github.com/opencontainers/selinux@v1.10.2",
						"github.com/agext/levenshtein@v1.2.3",
						"github.com/aws/aws-sdk-go-v2/config@v1.18.15",
						"github.com/urfave/cli@v1.22.7",
						"github.com/aws/smithy-go@v1.13.5",
						"github.com/containerd/go-runc@v1.0.0",
						"github.com/opencontainers/runtime-spec@v1.0.3-0.20220311020903-6969a0a09ab1",
						"github.com/moby/patternmatcher@v0.5.0",
						"github.com/opencontainers/runc@v1.1.3",
						"github.com/tonistiigi/fsutil@v0.0.0-20230105215944-fb433841cbfa",
						"github.com/opencontainers/go-digest@v1.0.0",
						"github.com/sirupsen/logrus@v1.9.0",
						"github.com/docker/docker@v23.0.0-rc.1+incompatible",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/moby/locker@v1.0.1",
						"github.com/moby/sys/mountinfo@v0.6.2",
						"github.com/tonistiigi/go-actions-cache@v0.0.0-20220404170428-0bdeb6e1eac7",
						"github.com/containerd/go-cni@v1.1.6",
						"github.com/docker/distribution@v2.8.1+incompatible",
						"github.com/mitchellh/hashstructure/v2@v2.0.2",
						"github.com/pkg/errors@v0.9.1",
						"github.com/containerd/typeurl@v1.0.2",
						"github.com/tonistiigi/go-archvariant@v1.0.0",
						"github.com/tonistiigi/vt100@v0.0.0-20210615222946-8066bb97264f",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
						"github.com/package-url/packageurl-go@v0.1.1-0.20220428063043-89078438f170",
						"go.opentelemetry.io/otel/sdk@v1.11.1",
						"github.com/tonistiigi/units@v0.0.0-20180711220420-6950e57a87ea",
						"go.opentelemetry.io/otel/trace@v1.11.1",
						"golang.org/x/net@v0.7.0",
						"github.com/containerd/containerd@v1.6.18",
						"golang.org/x/crypto@v0.5.0",
						"github.com/aws/aws-sdk-go-v2/credentials@v1.13.15",
						"github.com/containerd/nydus-snapshotter@v0.3.1",
						"github.com/Microsoft/go-winio@v0.6.0",
						"go.opentelemetry.io/otel@v1.11.1",
						"go.opentelemetry.io/otel/exporters/jaeger@v1.4.1",
						"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob@v0.4.1",
						"github.com/hashicorp/go-immutable-radix@v1.3.1",
						"github.com/gofrs/flock@v0.8.1",
						"github.com/gogo/googleapis@v1.4.1",
						"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp@v0.35.0",
						"github.com/containerd/stargz-snapshotter@v0.13.0",
						"github.com/opencontainers/image-spec@v1.1.0-rc2",
						"github.com/spdx/tools-golang@v0.4.0",
						"golang.org/x/sync@v0.1.0",
						"github.com/aws/aws-sdk-go-v2/feature/s3/manager@v1.11.10",
						"github.com/serialx/hashring@v0.0.0-20190422032157-8b2912629002",
						"github.com/docker/cli@v23.0.0-rc.1+incompatible",
						"go.etcd.io/bbolt@v1.3.6",
						"github.com/containerd/fuse-overlayfs-snapshotter@v1.0.2",
						"github.com/grpc-ecosystem/go-grpc-middleware@v1.3.0",
						"golang.org/x/time@v0.1.0",
						"github.com/armon/circbuf@v0.0.0-20190214190532-5111143e8da2",
						"github.com/pelletier/go-toml@v1.9.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/moby/locker@v1.0.1",
					"Name": "github.com/moby/locker",
					"Version": "1.0.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/moby/patternmatcher@v0.5.0",
					"Name": "github.com/moby/patternmatcher",
					"Version": "0.5.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/moby/spdystream@v0.2.0",
					"Name": "github.com/moby/spdystream",
					"Version": "0.2.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/gorilla/websocket@v1.4.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/moby/sys/mount@v0.3.3",
					"Name": "github.com/moby/sys/mount",
					"Version": "0.3.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/moby/sys/mountinfo@v0.6.2",
					"Name": "github.com/moby/sys/mountinfo",
					"Version": "0.6.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/moby/sys/sequential@v0.5.0",
					"Name": "github.com/moby/sys/sequential",
					"Version": "0.5.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/moby/sys/signal@v0.7.0",
					"Name": "github.com/moby/sys/signal",
					"Version": "0.7.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/moby/sys/symlink@v0.2.0",
					"Name": "github.com/moby/sys/symlink",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/moby/term@v0.0.0-20221205130635-1aeaba878587",
					"Name": "github.com/moby/term",
					"Version": "0.0.0-20221205130635-1aeaba878587",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/creack/pty@v1.1.18",
						"golang.org/x/sys@v0.5.0",
						"github.com/Azure/go-ansiterm@v0.0.0-20210617225240-d185dfc1b5a1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/modern-go/concurrent@v0.0.0-20180306012644-bacd9c7ef1dd",
					"Name": "github.com/modern-go/concurrent",
					"Version": "0.0.0-20180306012644-bacd9c7ef1dd",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/modern-go/reflect2@v1.0.2",
					"Name": "github.com/modern-go/reflect2",
					"Version": "1.0.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/modocache/gover@v0.0.0-20171022184752-b58185e213c5",
					"Name": "github.com/modocache/gover",
					"Version": "0.0.0-20171022184752-b58185e213c5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mohae/deepcopy@v0.0.0-20170929034955-c48cc78d4826",
					"Name": "github.com/mohae/deepcopy",
					"Version": "0.0.0-20170929034955-c48cc78d4826",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/monochromegane/go-gitignore@v0.0.0-20200626010858-205db1a8cc00",
					"Name": "github.com/monochromegane/go-gitignore",
					"Version": "0.0.0-20200626010858-205db1a8cc00",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/montanaflynn/stats@v0.6.6",
					"Name": "github.com/montanaflynn/stats",
					"Version": "0.6.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/moricho/tparallel@v0.2.1",
					"Name": "github.com/moricho/tparallel",
					"Version": "0.2.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/morikuni/aec@v1.0.0",
					"Name": "github.com/morikuni/aec",
					"Version": "1.0.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mozilla/scribe@v0.0.0-20180711195314-fb71baf557c1",
					"Name": "github.com/mozilla/scribe",
					"Version": "0.0.0-20180711195314-fb71baf557c1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mozilla/tls-observatory@v0.0.0-20210609171429-7bc42856d2e5",
					"Name": "github.com/mozilla/tls-observatory",
					"Version": "0.0.0-20210609171429-7bc42856d2e5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mreiferson/go-httpclient@v0.0.0-20160630210159-31f0106b4474",
					"Name": "github.com/mreiferson/go-httpclient",
					"Version": "0.0.0-20160630210159-31f0106b4474",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mrunalp/fileutils@v0.5.0",
					"Name": "github.com/mrunalp/fileutils",
					"Version": "0.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/munnerz/goautoneg@v0.0.0-20191010083416-a7dc8b61c822",
					"Name": "github.com/munnerz/goautoneg",
					"Version": "0.0.0-20191010083416-a7dc8b61c822",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mwitkow/go-conntrack@v0.0.0-20190716064945-2f068394615f",
					"Name": "github.com/mwitkow/go-conntrack",
					"Version": "0.0.0-20190716064945-2f068394615f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mwitkow/go-proto-validators@v0.2.0",
					"Name": "github.com/mwitkow/go-proto-validators",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/mxk/go-flowrate@v0.0.0-20140419014527-cca7078d478f",
					"Name": "github.com/mxk/go-flowrate",
					"Version": "0.0.0-20140419014527-cca7078d478f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/nakabonne/nestif@v0.3.1",
					"Name": "github.com/nakabonne/nestif",
					"Version": "0.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/nbutton23/zxcvbn-go@v0.0.0-20210217022336-fa2cb2858354",
					"Name": "github.com/nbutton23/zxcvbn-go",
					"Version": "0.0.0-20210217022336-fa2cb2858354",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ncw/swift@v1.0.47",
					"Name": "github.com/ncw/swift",
					"Version": "1.0.47",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/networkplumbing/go-nft@v0.2.0",
					"Name": "github.com/networkplumbing/go-nft",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/neurosnap/sentences@v1.0.6",
					"Name": "github.com/neurosnap/sentences",
					"Version": "1.0.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/niemeyer/pretty@v0.0.0-20200227124842-a10e7caefd8e",
					"Name": "github.com/niemeyer/pretty",
					"Version": "0.0.0-20200227124842-a10e7caefd8e",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/nightlyone/lockfile@v1.0.0",
					"Name": "github.com/nightlyone/lockfile",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/nishanths/exhaustive@v0.2.3",
					"Name": "github.com/nishanths/exhaustive",
					"Version": "0.2.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/nishanths/predeclared@v0.2.1",
					"Name": "github.com/nishanths/predeclared",
					"Version": "0.2.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/nwaples/rardecode@v1.1.0",
					"Name": "github.com/nwaples/rardecode",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/nxadm/tail@v1.4.8",
					"Name": "github.com/nxadm/tail",
					"Version": "1.4.8",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/fsnotify/fsnotify@v1.6.0",
						"gopkg.in/tomb.v1@v1.0.0-20141024135613-dd632973f1e7"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/oklog/run@v1.1.0",
					"Name": "github.com/oklog/run",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/oklog/ulid@v1.3.1",
					"Name": "github.com/oklog/ulid",
					"Version": "1.3.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/olekukonko/tablewriter@v0.0.5",
					"Name": "github.com/olekukonko/tablewriter",
					"Version": "0.0.5",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/mattn/go-runewidth@v0.0.13"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/onsi/ginkgo@v1.16.5",
					"Name": "github.com/onsi/ginkgo",
					"Version": "1.16.5",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-task/slim-sprig@v0.0.0-20210107165309-348f09dbbbc0",
						"github.com/nxadm/tail@v1.4.8",
						"github.com/onsi/gomega@v1.23.0",
						"golang.org/x/sys@v0.5.0",
						"golang.org/x/tools@v0.2.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/onsi/ginkgo/v2@v2.4.0",
					"Name": "github.com/onsi/ginkgo/v2",
					"Version": "2.4.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/google/pprof@v0.0.0-20221118152302-e6195bd50e26",
						"golang.org/x/sys@v0.5.0",
						"golang.org/x/tools@v0.2.0",
						"github.com/go-logr/logr@v1.2.3",
						"github.com/go-task/slim-sprig@v0.0.0-20210107165309-348f09dbbbc0",
						"github.com/onsi/gomega@v1.23.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/onsi/gomega@v1.23.0",
					"Name": "github.com/onsi/gomega",
					"Version": "1.23.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/onsi/ginkgo/v2@v2.4.0",
						"gopkg.in/yaml.v3@v3.0.1",
						"golang.org/x/net@v0.7.0",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/google/go-cmp@v0.5.9"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/op/go-logging@v0.0.0-20160315200505-970db520ece7",
					"Name": "github.com/op/go-logging",
					"Version": "0.0.0-20160315200505-970db520ece7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/open-policy-agent/opa@v0.44.1-0.20220927105354-00e835a7cc15",
					"Name": "github.com/open-policy-agent/opa",
					"Version": "0.44.1-0.20220927105354-00e835a7cc15",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/andreyvit/diff@v0.0.0-20170406064948-c7f18ee00883",
						"github.com/gorilla/mux@v1.8.0",
						"github.com/OneOfOne/xxhash@v1.2.8",
						"github.com/agnivade/levenshtein@v1.1.1",
						"github.com/tchap/go-patricia/v2@v2.3.1",
						"github.com/containerd/containerd@v1.6.18",
						"github.com/go-ini/ini@v1.67.0",
						"github.com/spf13/pflag@v1.0.5",
						"golang.org/x/net@v0.7.0",
						"github.com/go-logr/logr@v1.2.3",
						"github.com/sirupsen/logrus@v1.9.0",
						"github.com/spf13/cobra@v1.6.1",
						"oras.land/oras-go@v1.2.2",
						"github.com/ghodss/yaml@v1.0.0",
						"github.com/stretchr/testify@v1.8.1",
						"go.opentelemetry.io/otel/sdk@v1.11.1",
						"google.golang.org/grpc@v1.52.0",
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/pkg/errors@v0.9.1",
						"github.com/yashtewari/glob-intersection@v0.1.0",
						"github.com/olekukonko/tablewriter@v0.0.5",
						"github.com/opencontainers/go-digest@v1.0.0",
						"github.com/fsnotify/fsnotify@v1.6.0",
						"github.com/gobwas/glob@v0.2.3",
						"github.com/opencontainers/image-spec@v1.1.0-rc2",
						"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc@v1.10.0",
						"github.com/dgraph-io/badger/v3@v3.2103.2",
						"github.com/fortytw2/leaktest@v1.3.0",
						"go.uber.org/automaxprocs@v1.5.1",
						"github.com/xeipuuv/gojsonreference@v0.0.0-20180127040603-bd5ef7bd5415",
						"go.opentelemetry.io/otel@v1.11.1",
						"github.com/rcrowley/go-metrics@v0.0.0-20200313005456-10cdbea86bc0",
						"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp@v0.35.0",
						"github.com/foxcpp/go-mockdns@v0.0.0-20210729171921-fb145fc6f897",
						"github.com/peterh/liner@v0.0.0-20170211195444-bf27d3ba8e1d",
						"golang.org/x/time@v0.1.0",
						"github.com/golang/protobuf@v1.5.2",
						"go.opentelemetry.io/otel/trace@v1.11.1",
						"go.opentelemetry.io/otel/exporters/otlp/otlptrace@v1.10.0",
						"github.com/bytecodealliance/wasmtime-go@v1.0.0",
						"github.com/prometheus/client_golang@v1.14.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/opencontainers/go-digest@v1.0.0",
					"Name": "github.com/opencontainers/go-digest",
					"Version": "1.0.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/opencontainers/image-spec@v1.1.0-rc2",
					"Name": "github.com/opencontainers/image-spec",
					"Version": "1.1.0-rc2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/opencontainers/go-digest@v1.0.0",
						"github.com/pkg/errors@v0.9.1",
						"github.com/russross/blackfriday@v1.6.0",
						"github.com/xeipuuv/gojsonschema@v1.2.0",
						"github.com/xeipuuv/gojsonreference@v0.0.0-20180127040603-bd5ef7bd5415"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/opencontainers/runc@v1.1.3",
					"Name": "github.com/opencontainers/runc",
					"Version": "1.1.3",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/coreos/go-systemd/v22@v22.4.0",
						"golang.org/x/net@v0.7.0",
						"github.com/cyphar/filepath-securejoin@v0.2.3",
						"github.com/opencontainers/runtime-spec@v1.0.3-0.20220311020903-6969a0a09ab1",
						"google.golang.org/protobuf@v1.28.1",
						"github.com/urfave/cli@v1.22.7",
						"golang.org/x/sys@v0.5.0",
						"github.com/cilium/ebpf@v0.7.0",
						"github.com/godbus/dbus/v5@v5.0.6",
						"github.com/opencontainers/selinux@v1.10.2",
						"github.com/syndtr/gocapability@v0.0.0-20200815063812-42c35b437635",
						"github.com/mrunalp/fileutils@v0.5.0",
						"github.com/seccomp/libseccomp-golang@v0.9.2-0.20220502022130-f33da4d89646",
						"github.com/sirupsen/logrus@v1.9.0",
						"github.com/vishvananda/netlink@v1.1.1-0.20210330154013-f5de75959ad5",
						"github.com/checkpoint-restore/go-criu/v5@v5.3.0",
						"github.com/containerd/console@v1.0.3",
						"github.com/docker/go-units@v0.5.0",
						"github.com/moby/sys/mountinfo@v0.6.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/opencontainers/runtime-spec@v1.0.3-0.20220311020903-6969a0a09ab1",
					"Name": "github.com/opencontainers/runtime-spec",
					"Version": "1.0.3-0.20220311020903-6969a0a09ab1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/opencontainers/runtime-tools@v0.0.0-20181011054405-1d69bd0f9c39",
					"Name": "github.com/opencontainers/runtime-tools",
					"Version": "0.0.0-20181011054405-1d69bd0f9c39",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/opencontainers/selinux@v1.10.2",
					"Name": "github.com/opencontainers/selinux",
					"Version": "1.10.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/opentracing-contrib/go-stdlib@v1.0.0",
					"Name": "github.com/opentracing-contrib/go-stdlib",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/opentracing/opentracing-go@v1.2.0",
					"Name": "github.com/opentracing/opentracing-go",
					"Version": "1.2.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/openzipkin/zipkin-go@v0.1.6",
					"Name": "github.com/openzipkin/zipkin-go",
					"Version": "0.1.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/otiai10/copy@v1.2.0",
					"Name": "github.com/otiai10/copy",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/otiai10/curr@v1.0.0",
					"Name": "github.com/otiai10/curr",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/otiai10/mint@v1.3.1",
					"Name": "github.com/otiai10/mint",
					"Version": "1.3.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/owenrumney/go-sarif@v1.1.1",
					"Name": "github.com/owenrumney/go-sarif",
					"Version": "1.1.1",
					"Licenses": [
						"Unlicense"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1",
						"github.com/zclconf/go-cty@v1.10.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/owenrumney/go-sarif/v2@v2.1.2",
					"Name": "github.com/owenrumney/go-sarif/v2",
					"Version": "2.1.2",
					"Licenses": [
						"Unlicense"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/owenrumney/go-sarif@v1.1.1",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/owenrumney/squealer@v1.1.1",
					"Name": "github.com/owenrumney/squealer",
					"Version": "1.1.1",
					"Licenses": [
						"Unlicense"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-git/go-git/v5@v5.5.2",
						"github.com/go-git/go-billy/v5@v5.4.0",
						"github.com/sirupsen/logrus@v1.9.0",
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/owenrumney/go-sarif@v1.1.1",
						"github.com/spf13/cobra@v1.6.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/package-url/packageurl-go@v0.1.1-0.20220428063043-89078438f170",
					"Name": "github.com/package-url/packageurl-go",
					"Version": "0.1.1-0.20220428063043-89078438f170",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pascaldekloe/goe@v0.1.0",
					"Name": "github.com/pascaldekloe/goe",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pborman/uuid@v1.2.0",
					"Name": "github.com/pborman/uuid",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pelletier/go-buffruneio@v0.2.0",
					"Name": "github.com/pelletier/go-buffruneio",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pelletier/go-toml@v1.9.5",
					"Name": "github.com/pelletier/go-toml",
					"Version": "1.9.5",
					"Licenses": [
						"Apache-2.0",
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pelletier/go-toml/v2@v2.0.6",
					"Name": "github.com/pelletier/go-toml/v2",
					"Version": "2.0.6",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/peterbourgon/diskv@v2.0.1+incompatible",
					"Name": "github.com/peterbourgon/diskv",
					"Version": "2.0.1+incompatible",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/peterh/liner@v0.0.0-20170211195444-bf27d3ba8e1d",
					"Name": "github.com/peterh/liner",
					"Version": "0.0.0-20170211195444-bf27d3ba8e1d",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/phayes/checkstyle@v0.0.0-20170904204023-bfd46e6a821d",
					"Name": "github.com/phayes/checkstyle",
					"Version": "0.0.0-20170904204023-bfd46e6a821d",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/phayes/freeport@v0.0.0-20220201140144-74d24b5ae9f5",
					"Name": "github.com/phayes/freeport",
					"Version": "0.0.0-20220201140144-74d24b5ae9f5",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pierrec/lz4@v2.6.1+incompatible",
					"Name": "github.com/pierrec/lz4",
					"Version": "2.6.1+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pierrec/lz4/v4@v4.1.2",
					"Name": "github.com/pierrec/lz4/v4",
					"Version": "4.1.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pjbgf/sha1cd@v0.2.3",
					"Name": "github.com/pjbgf/sha1cd",
					"Version": "0.2.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pkg/browser@v0.0.0-20210911075715-681adbf594b8",
					"Name": "github.com/pkg/browser",
					"Version": "0.0.0-20210911075715-681adbf594b8",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pkg/diff@v0.0.0-20210226163009-20ebb0f2a09e",
					"Name": "github.com/pkg/diff",
					"Version": "0.0.0-20210226163009-20ebb0f2a09e",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pkg/errors@v0.9.1",
					"Name": "github.com/pkg/errors",
					"Version": "0.9.1",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pkg/profile@v1.5.0",
					"Name": "github.com/pkg/profile",
					"Version": "1.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pkg/sftp@v1.13.1",
					"Name": "github.com/pkg/sftp",
					"Version": "1.13.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pmezard/go-difflib@v1.0.0",
					"Name": "github.com/pmezard/go-difflib",
					"Version": "1.0.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/polyfloyd/go-errorlint@v0.0.0-20210722154253-910bb7978349",
					"Name": "github.com/polyfloyd/go-errorlint",
					"Version": "0.0.0-20210722154253-910bb7978349",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/posener/complete@v1.2.3",
					"Name": "github.com/posener/complete",
					"Version": "1.2.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/poy/onpar@v0.0.0-20190519213022-ee068f8ea4d1",
					"Name": "github.com/poy/onpar",
					"Version": "0.0.0-20190519213022-ee068f8ea4d1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pquerna/cachecontrol@v0.1.0",
					"Name": "github.com/pquerna/cachecontrol",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/prashantv/gostub@v1.1.0",
					"Name": "github.com/prashantv/gostub",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/prometheus/client_golang@v1.14.0",
					"Name": "github.com/prometheus/client_golang",
					"Version": "1.14.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/beorn7/perks@v1.0.1",
						"google.golang.org/protobuf@v1.28.1",
						"github.com/prometheus/client_model@v0.3.0",
						"github.com/prometheus/procfs@v0.8.0",
						"golang.org/x/sys@v0.5.0",
						"github.com/prometheus/common@v0.37.0",
						"github.com/cespare/xxhash/v2@v2.1.2",
						"github.com/davecgh/go-spew@v1.1.1",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/json-iterator/go@v1.1.12"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/prometheus/client_model@v0.3.0",
					"Name": "github.com/prometheus/client_model",
					"Version": "0.3.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/golang/protobuf@v1.5.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/prometheus/common@v0.37.0",
					"Name": "github.com/prometheus/common",
					"Version": "0.37.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/net@v0.7.0",
						"golang.org/x/oauth2@v0.1.0",
						"gopkg.in/alecthomas/kingpin.v2@v2.2.6",
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/matttproud/golang_protobuf_extensions@v1.0.4",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/julienschmidt/httprouter@v1.3.0",
						"github.com/mwitkow/go-conntrack@v0.0.0-20190716064945-2f068394615f",
						"github.com/prometheus/client_golang@v1.14.0",
						"github.com/prometheus/client_model@v0.3.0",
						"github.com/go-kit/log@v0.2.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/prometheus/procfs@v0.8.0",
					"Name": "github.com/prometheus/procfs",
					"Version": "0.8.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/google/go-cmp@v0.5.9",
						"golang.org/x/sync@v0.1.0",
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/prometheus/prometheus@v2.5.0+incompatible",
					"Name": "github.com/prometheus/prometheus",
					"Version": "2.5.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/prometheus/tsdb@v0.7.1",
					"Name": "github.com/prometheus/tsdb",
					"Version": "0.7.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pseudomuto/protoc-gen-doc@v1.5.1",
					"Name": "github.com/pseudomuto/protoc-gen-doc",
					"Version": "1.5.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/pseudomuto/protokit@v0.2.0",
					"Name": "github.com/pseudomuto/protokit",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/quasilyte/go-consistent@v0.0.0-20190521200055-c6f3937de18c",
					"Name": "github.com/quasilyte/go-consistent",
					"Version": "0.0.0-20190521200055-c6f3937de18c",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/quasilyte/go-ruleguard@v0.3.13",
					"Name": "github.com/quasilyte/go-ruleguard",
					"Version": "0.3.13",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/quasilyte/go-ruleguard/dsl@v0.3.10",
					"Name": "github.com/quasilyte/go-ruleguard/dsl",
					"Version": "0.3.10",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/quasilyte/go-ruleguard/rules@v0.0.0-20210428214800-545e0d2e0bf7",
					"Name": "github.com/quasilyte/go-ruleguard/rules",
					"Version": "0.0.0-20210428214800-545e0d2e0bf7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/quasilyte/regex/syntax@v0.0.0-20200407221936-30656e2c4a95",
					"Name": "github.com/quasilyte/regex/syntax",
					"Version": "0.0.0-20200407221936-30656e2c4a95",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/qur/ar@v0.0.0-20130629153254-282534b91770",
					"Name": "github.com/qur/ar",
					"Version": "0.0.0-20130629153254-282534b91770",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/rcrowley/go-metrics@v0.0.0-20200313005456-10cdbea86bc0",
					"Name": "github.com/rcrowley/go-metrics",
					"Version": "0.0.0-20200313005456-10cdbea86bc0",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/remyoudompheng/bigfft@v0.0.0-20230126093431-47fa9a501578",
					"Name": "github.com/remyoudompheng/bigfft",
					"Version": "0.0.0-20230126093431-47fa9a501578",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/rivo/uniseg@v0.2.0",
					"Name": "github.com/rivo/uniseg",
					"Version": "0.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/rogpeppe/fastuuid@v1.2.0",
					"Name": "github.com/rogpeppe/fastuuid",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/rogpeppe/go-internal@v1.8.1",
					"Name": "github.com/rogpeppe/go-internal",
					"Version": "1.8.1",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/pkg/diff@v0.0.0-20210226163009-20ebb0f2a09e",
						"gopkg.in/errgo.v2@v2.1.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/rs/cors@v1.8.2",
					"Name": "github.com/rs/cors",
					"Version": "1.8.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/rs/xid@v1.4.0",
					"Name": "github.com/rs/xid",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/rs/zerolog@v1.15.0",
					"Name": "github.com/rs/zerolog",
					"Version": "1.15.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/rubenv/sql-migrate@v1.2.0",
					"Name": "github.com/rubenv/sql-migrate",
					"Version": "1.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/gobuffalo/packr/v2@v2.8.3",
						"github.com/mattn/go-oci8@v0.1.1",
						"github.com/mitchellh/cli@v1.1.4",
						"gopkg.in/check.v1@v1.0.0-20201130134442-10cb98267c6c",
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/denisenkom/go-mssqldb@v0.11.0",
						"github.com/go-sql-driver/mysql@v1.6.0",
						"github.com/godror/godror@v0.24.2",
						"github.com/lib/pq@v1.10.7",
						"github.com/mattn/go-sqlite3@v2.0.3+incompatible",
						"github.com/olekukonko/tablewriter@v0.0.5",
						"github.com/go-gorp/gorp/v3@v3.0.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/rubiojr/go-vhd@v0.0.0-20160810183302-0bfd3b39853c",
					"Name": "github.com/rubiojr/go-vhd",
					"Version": "0.0.0-20160810183302-0bfd3b39853c",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/russross/blackfriday@v1.6.0",
					"Name": "github.com/russross/blackfriday",
					"Version": "1.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/russross/blackfriday/v2@v2.1.0",
					"Name": "github.com/russross/blackfriday/v2",
					"Version": "2.1.0",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ryancurrah/gomodguard@v1.2.3",
					"Name": "github.com/ryancurrah/gomodguard",
					"Version": "1.2.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ryanrolds/sqlclosecheck@v0.3.0",
					"Name": "github.com/ryanrolds/sqlclosecheck",
					"Version": "0.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ryanuber/columnize@v2.1.0+incompatible",
					"Name": "github.com/ryanuber/columnize",
					"Version": "2.1.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ryanuber/go-glob@v1.0.0",
					"Name": "github.com/ryanuber/go-glob",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/safchain/ethtool@v0.0.0-20210803160452-9aa261dae9b1",
					"Name": "github.com/safchain/ethtool",
					"Version": "0.0.0-20210803160452-9aa261dae9b1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sagikazarmark/crypt@v0.9.0",
					"Name": "github.com/sagikazarmark/crypt",
					"Version": "0.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/samber/lo@v1.37.0",
					"Name": "github.com/samber/lo",
					"Version": "1.37.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/exp@v0.0.0-20220823124025-807a23277127"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/sanposhiho/wastedassign/v2@v2.0.6",
					"Name": "github.com/sanposhiho/wastedassign/v2",
					"Version": "2.0.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/saracen/walker@v0.0.0-20191201085201-324a081bae7e",
					"Name": "github.com/saracen/walker",
					"Version": "0.0.0-20191201085201-324a081bae7e",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/tools@v0.2.0",
						"golang.org/x/sync@v0.1.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/sassoftware/go-rpmutils@v0.1.1",
					"Name": "github.com/sassoftware/go-rpmutils",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sassoftware/relic@v0.0.0-20210427151427-dfb082b79b74",
					"Name": "github.com/sassoftware/relic",
					"Version": "0.0.0-20210427151427-dfb082b79b74",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/satori/go.uuid@v1.2.0",
					"Name": "github.com/satori/go.uuid",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sclevine/agouti@v3.0.0+incompatible",
					"Name": "github.com/sclevine/agouti",
					"Version": "3.0.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sclevine/spec@v1.4.0",
					"Name": "github.com/sclevine/spec",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sean-/seed@v0.0.0-20170313163322-e2103e2c3529",
					"Name": "github.com/sean-/seed",
					"Version": "0.0.0-20170313163322-e2103e2c3529",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/seccomp/libseccomp-golang@v0.9.2-0.20220502022130-f33da4d89646",
					"Name": "github.com/seccomp/libseccomp-golang",
					"Version": "0.9.2-0.20220502022130-f33da4d89646",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/secure-systems-lab/go-securesystemslib@v0.4.0",
					"Name": "github.com/secure-systems-lab/go-securesystemslib",
					"Version": "0.4.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/crypto@v0.5.0",
						"github.com/codahale/rfc6979@v0.0.0-20141003034818-6a90f24967eb",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/securego/gosec@v0.0.0-20200401082031-e946c8c39989",
					"Name": "github.com/securego/gosec",
					"Version": "0.0.0-20200401082031-e946c8c39989",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/securego/gosec/v2@v2.9.1",
					"Name": "github.com/securego/gosec/v2",
					"Version": "2.9.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/segmentio/ksuid@v1.0.4",
					"Name": "github.com/segmentio/ksuid",
					"Version": "1.0.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sergi/go-diff@v1.2.0",
					"Name": "github.com/sergi/go-diff",
					"Version": "1.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/serialx/hashring@v0.0.0-20190422032157-8b2912629002",
					"Name": "github.com/serialx/hashring",
					"Version": "0.0.0-20190422032157-8b2912629002",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/shazow/go-diff@v0.0.0-20160112020656-b6b7b6733b8c",
					"Name": "github.com/shazow/go-diff",
					"Version": "0.0.0-20160112020656-b6b7b6733b8c",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/shibumi/go-pathspec@v1.3.0",
					"Name": "github.com/shibumi/go-pathspec",
					"Version": "1.3.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/shirou/gopsutil@v0.0.0-20190901111213-e4ec7b275ada",
					"Name": "github.com/shirou/gopsutil",
					"Version": "0.0.0-20190901111213-e4ec7b275ada",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/shirou/gopsutil/v3@v3.21.10",
					"Name": "github.com/shirou/gopsutil/v3",
					"Version": "3.21.10",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/shirou/w32@v0.0.0-20160930032740-bb4de0191aa4",
					"Name": "github.com/shirou/w32",
					"Version": "0.0.0-20160930032740-bb4de0191aa4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/shogo82148/go-shuffle@v0.0.0-20170808115208-59829097ff3b",
					"Name": "github.com/shogo82148/go-shuffle",
					"Version": "0.0.0-20170808115208-59829097ff3b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/shopspring/decimal@v1.2.0",
					"Name": "github.com/shopspring/decimal",
					"Version": "1.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/shurcooL/go@v0.0.0-20180423040247-9e1955d9fb6e",
					"Name": "github.com/shurcooL/go",
					"Version": "0.0.0-20180423040247-9e1955d9fb6e",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/shurcooL/go-goon@v0.0.0-20170922171312-37c2f522c041",
					"Name": "github.com/shurcooL/go-goon",
					"Version": "0.0.0-20170922171312-37c2f522c041",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/shurcooL/sanitized_anchor_name@v1.0.0",
					"Name": "github.com/shurcooL/sanitized_anchor_name",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sigstore/rekor@v1.0.1",
					"Name": "github.com/sigstore/rekor",
					"Version": "1.0.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"gopkg.in/ini.v1@v1.67.0",
						"github.com/spf13/viper@v1.15.0",
						"golang.org/x/crypto@v0.5.0",
						"golang.org/x/sync@v0.1.0",
						"sigs.k8s.io/release-utils@v0.7.3",
						"github.com/hashicorp/go-retryablehttp@v0.7.2",
						"github.com/google/rpmpack@v0.0.0-20210518075352-dc539ef4f2ea",
						"golang.org/x/net@v0.7.0",
						"google.golang.org/protobuf@v1.28.1",
						"github.com/go-openapi/spec@v0.20.7",
						"github.com/go-chi/chi@v4.1.2+incompatible",
						"github.com/prometheus/client_golang@v1.14.0",
						"github.com/in-toto/in-toto-golang@v0.5.0",
						"golang.org/x/exp@v0.0.0-20220823124025-807a23277127",
						"github.com/go-openapi/strfmt@v0.21.3",
						"go.uber.org/zap@v1.24.0",
						"github.com/transparency-dev/merkle@v0.0.1",
						"github.com/blang/semver@v3.5.1+incompatible",
						"github.com/go-openapi/validate@v0.22.0",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/asaskevich/govalidator@v0.0.0-20210307081110-f21760c49a8d",
						"gocloud.dev@v0.24.1-0.20211119014450-028788aaaa4c",
						"golang.org/x/mod@v0.8.0",
						"github.com/spf13/cobra@v1.6.1",
						"github.com/veraison/go-cose@v1.0.0-rc.1",
						"go.uber.org/goleak@v1.2.0",
						"github.com/sassoftware/relic@v0.0.0-20210427151427-dfb082b79b74",
						"github.com/tent/canonical-json-go@v0.0.0-20130607151641-96e4ba3a7613",
						"github.com/go-openapi/runtime@v0.25.0",
						"github.com/spf13/pflag@v1.0.5",
						"github.com/secure-systems-lab/go-securesystemslib@v0.4.0",
						"github.com/ghodss/yaml@v1.0.0",
						"google.golang.org/grpc@v1.52.0",
						"go.step.sm/crypto@v0.21.0",
						"github.com/cavaliercoder/go-rpm@v0.0.0-20200122174316-8cb9fd9c31a8",
						"github.com/google/trillian@v1.5.0",
						"github.com/mediocregopher/radix/v4@v4.1.1",
						"github.com/mitchellh/mapstructure@v1.5.0",
						"github.com/cyberphone/json-canonicalization@v0.0.0-20210303052042-6bc126869bf4",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
						"github.com/theupdateframework/go-tuf@v0.5.2-0.20220930112810-3890c1e7ace4",
						"github.com/go-openapi/swag@v0.22.3",
						"github.com/go-openapi/errors@v0.20.3",
						"github.com/go-openapi/loads@v0.21.2",
						"github.com/sigstore/sigstore@v1.4.4",
						"github.com/jedisct1/go-minisign@v0.0.0-20211028175153-1c139d1cc84b",
						"github.com/rs/cors@v1.8.2",
						"github.com/mitchellh/go-homedir@v1.1.0",
						"github.com/go-playground/validator/v10@v10.11.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/sigstore/sigstore@v1.4.4",
					"Name": "github.com/sigstore/sigstore",
					"Version": "1.4.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sirupsen/logrus@v1.9.0",
					"Name": "github.com/sirupsen/logrus",
					"Version": "1.9.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/sivchari/tenv@v1.4.7",
					"Name": "github.com/sivchari/tenv",
					"Version": "1.4.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/skeema/knownhosts@v1.1.0",
					"Name": "github.com/skeema/knownhosts",
					"Version": "1.1.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/crypto@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/skratchdot/open-golang@v0.0.0-20200116055534-eef842397966",
					"Name": "github.com/skratchdot/open-golang",
					"Version": "0.0.0-20200116055534-eef842397966",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/smallstep/assert@v0.0.0-20200723003110-82e2b9b3b262",
					"Name": "github.com/smallstep/assert",
					"Version": "0.0.0-20200723003110-82e2b9b3b262",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/smartystreets/assertions@v1.0.0",
					"Name": "github.com/smartystreets/assertions",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/smartystreets/go-aws-auth@v0.0.0-20180515143844-0c1422d1fdb9",
					"Name": "github.com/smartystreets/go-aws-auth",
					"Version": "0.0.0-20180515143844-0c1422d1fdb9",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/smartystreets/goconvey@v1.6.4",
					"Name": "github.com/smartystreets/goconvey",
					"Version": "1.6.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/smartystreets/gunit@v1.0.0",
					"Name": "github.com/smartystreets/gunit",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/soheilhy/cmux@v0.1.5",
					"Name": "github.com/soheilhy/cmux",
					"Version": "0.1.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sonatard/noctx@v0.0.1",
					"Name": "github.com/sonatard/noctx",
					"Version": "0.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sosedoff/gitkit@v0.3.0",
					"Name": "github.com/sosedoff/gitkit",
					"Version": "0.3.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/gofrs/uuid@v4.2.0+incompatible",
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/crypto@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/sourcegraph/annotate@v0.0.0-20160123013949-f4cad6c6324d",
					"Name": "github.com/sourcegraph/annotate",
					"Version": "0.0.0-20160123013949-f4cad6c6324d",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sourcegraph/go-diff@v0.6.1",
					"Name": "github.com/sourcegraph/go-diff",
					"Version": "0.6.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/sourcegraph/syntaxhighlight@v0.0.0-20170531221838-bd320f5d308e",
					"Name": "github.com/sourcegraph/syntaxhighlight",
					"Version": "0.0.0-20170531221838-bd320f5d308e",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/spaolacci/murmur3@v1.1.0",
					"Name": "github.com/spaolacci/murmur3",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/spdx/gordf@v0.0.0-20201111095634-7098f93598fb",
					"Name": "github.com/spdx/gordf",
					"Version": "0.0.0-20201111095634-7098f93598fb",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/spdx/tools-golang@v0.4.0",
					"Name": "github.com/spdx/tools-golang",
					"Version": "0.4.0",
					"Licenses": [
						"Apache-2.0",
						"GPL-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/spdx/gordf@v0.0.0-20201111095634-7098f93598fb",
						"sigs.k8s.io/yaml@v1.3.0",
						"github.com/google/go-cmp@v0.5.9"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/spf13/afero@v1.9.3",
					"Name": "github.com/spf13/afero",
					"Version": "1.9.3",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/googleapis/google-cloud-go-testing@v0.0.0-20200911160855-bcd43fbb19e8",
						"github.com/pkg/sftp@v1.13.1",
						"golang.org/x/crypto@v0.5.0",
						"golang.org/x/oauth2@v0.1.0",
						"golang.org/x/text@v0.7.0",
						"google.golang.org/api@v0.107.0",
						"cloud.google.com/go/storage@v1.27.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/spf13/cast@v1.5.0",
					"Name": "github.com/spf13/cast",
					"Version": "1.5.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/frankban/quicktest@v1.14.3"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/spf13/cobra@v1.6.1",
					"Name": "github.com/spf13/cobra",
					"Version": "1.6.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/inconshreveable/mousetrap@v1.0.1",
						"github.com/spf13/pflag@v1.0.5",
						"gopkg.in/yaml.v3@v3.0.1",
						"github.com/cpuguy83/go-md2man/v2@v2.0.2"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/spf13/jwalterweatherman@v1.1.0",
					"Name": "github.com/spf13/jwalterweatherman",
					"Version": "1.1.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/spf13/pflag@v1.0.5",
					"Name": "github.com/spf13/pflag",
					"Version": "1.0.5",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/spf13/viper@v1.15.0",
					"Name": "github.com/spf13/viper",
					"Version": "1.15.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/subosito/gotenv@v1.4.2",
						"github.com/spf13/jwalterweatherman@v1.1.0",
						"gopkg.in/ini.v1@v1.67.0",
						"gopkg.in/yaml.v3@v3.0.1",
						"github.com/spf13/afero@v1.9.3",
						"github.com/magiconair/properties@v1.8.7",
						"github.com/fsnotify/fsnotify@v1.6.0",
						"github.com/hashicorp/hcl@v1.0.0",
						"github.com/mitchellh/mapstructure@v1.5.0",
						"github.com/pelletier/go-toml/v2@v2.0.6",
						"github.com/sagikazarmark/crypt@v0.9.0",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/spf13/cast@v1.5.0",
						"github.com/spf13/pflag@v1.0.5"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/spiffe/go-spiffe/v2@v2.1.1",
					"Name": "github.com/spiffe/go-spiffe/v2",
					"Version": "2.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/src-d/gcfg@v1.4.0",
					"Name": "github.com/src-d/gcfg",
					"Version": "1.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ssgreg/nlreturn/v2@v2.2.1",
					"Name": "github.com/ssgreg/nlreturn/v2",
					"Version": "2.2.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/stefanberger/go-pkcs11uri@v0.0.0-20201008174630-78d3cae3a980",
					"Name": "github.com/stefanberger/go-pkcs11uri",
					"Version": "0.0.0-20201008174630-78d3cae3a980",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/stoewer/go-strcase@v1.2.0",
					"Name": "github.com/stoewer/go-strcase",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/streadway/amqp@v1.0.0",
					"Name": "github.com/streadway/amqp",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/stretchr/objx@v0.5.0",
					"Name": "github.com/stretchr/objx",
					"Version": "0.5.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/stretchr/testify@v1.8.1",
					"Name": "github.com/stretchr/testify",
					"Version": "1.8.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/objx@v0.5.0",
						"gopkg.in/yaml.v3@v3.0.1",
						"github.com/davecgh/go-spew@v1.1.1",
						"github.com/pmezard/go-difflib@v1.0.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/subosito/gotenv@v1.4.2",
					"Name": "github.com/subosito/gotenv",
					"Version": "1.4.2",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/sylvia7788/contextcheck@v1.0.4",
					"Name": "github.com/sylvia7788/contextcheck",
					"Version": "1.0.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/syndtr/gocapability@v0.0.0-20200815063812-42c35b437635",
					"Name": "github.com/syndtr/gocapability",
					"Version": "0.0.0-20200815063812-42c35b437635",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/syndtr/goleveldb@v1.0.1-0.20220721030215-126854af5e6d",
					"Name": "github.com/syndtr/goleveldb",
					"Version": "1.0.1-0.20220721030215-126854af5e6d",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tarm/serial@v0.0.0-20180830185346-98f6abe2eb07",
					"Name": "github.com/tarm/serial",
					"Version": "0.0.0-20180830185346-98f6abe2eb07",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tchap/go-patricia@v2.2.6+incompatible",
					"Name": "github.com/tchap/go-patricia",
					"Version": "2.2.6+incompatible",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tchap/go-patricia/v2@v2.3.1",
					"Name": "github.com/tchap/go-patricia/v2",
					"Version": "2.3.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tdakkota/asciicheck@v0.0.0-20200416200610-e657995f937b",
					"Name": "github.com/tdakkota/asciicheck",
					"Version": "0.0.0-20200416200610-e657995f937b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tenntenn/modver@v1.0.1",
					"Name": "github.com/tenntenn/modver",
					"Version": "1.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tenntenn/text/transform@v0.0.0-20200319021203-7eef512accb3",
					"Name": "github.com/tenntenn/text/transform",
					"Version": "0.0.0-20200319021203-7eef512accb3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tent/canonical-json-go@v0.0.0-20130607151641-96e4ba3a7613",
					"Name": "github.com/tent/canonical-json-go",
					"Version": "0.0.0-20130607151641-96e4ba3a7613",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/testcontainers/testcontainers-go@v0.17.0",
					"Name": "github.com/testcontainers/testcontainers-go",
					"Version": "0.17.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/moby/term@v0.0.0-20221205130635-1aeaba878587",
						"gotest.tools/gotestsum@v1.8.2",
						"github.com/docker/docker@v23.0.0-rc.1+incompatible",
						"github.com/cenkalti/backoff/v4@v4.2.0",
						"github.com/containerd/containerd@v1.6.18",
						"github.com/opencontainers/image-spec@v1.1.0-rc2",
						"golang.org/x/sys@v0.5.0",
						"golang.org/x/text@v0.7.0",
						"github.com/stretchr/testify@v1.8.1",
						"gopkg.in/yaml.v3@v3.0.1",
						"github.com/docker/go-connections@v0.4.0",
						"github.com/google/uuid@v1.3.0",
						"github.com/docker/go-units@v0.5.0",
						"github.com/magiconair/properties@v1.8.7"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/tetafro/godot@v1.4.11",
					"Name": "github.com/tetafro/godot",
					"Version": "1.4.11",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tetratelabs/wazero@v1.0.0-pre.9",
					"Name": "github.com/tetratelabs/wazero",
					"Version": "1.0.0-pre.9",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/thales-e-security/pool@v0.0.2",
					"Name": "github.com/thales-e-security/pool",
					"Version": "0.0.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/theupdateframework/go-tuf@v0.5.2-0.20220930112810-3890c1e7ace4",
					"Name": "github.com/theupdateframework/go-tuf",
					"Version": "0.5.2-0.20220930112810-3890c1e7ace4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/thoas/go-funk@v0.9.1",
					"Name": "github.com/thoas/go-funk",
					"Version": "0.9.1",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/tidwall/pretty@v1.2.0",
					"Name": "github.com/tidwall/pretty",
					"Version": "1.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tilinna/clock@v1.1.0",
					"Name": "github.com/tilinna/clock",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/timakin/bodyclose@v0.0.0-20200424151742-cb6215831a94",
					"Name": "github.com/timakin/bodyclose",
					"Version": "0.0.0-20200424151742-cb6215831a94",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/titanous/rocacheck@v0.0.0-20171023193734-afe73141d399",
					"Name": "github.com/titanous/rocacheck",
					"Version": "0.0.0-20171023193734-afe73141d399",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tj/assert@v0.0.0-20171129193455-018094318fb0",
					"Name": "github.com/tj/assert",
					"Version": "0.0.0-20171129193455-018094318fb0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tj/go-elastic@v0.0.0-20171221160941-36157cbbebc2",
					"Name": "github.com/tj/go-elastic",
					"Version": "0.0.0-20171221160941-36157cbbebc2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tj/go-kinesis@v0.0.0-20171128231115-08b17f58cb1b",
					"Name": "github.com/tj/go-kinesis",
					"Version": "0.0.0-20171128231115-08b17f58cb1b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tj/go-spin@v1.1.0",
					"Name": "github.com/tj/go-spin",
					"Version": "1.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tklauser/go-sysconf@v0.3.9",
					"Name": "github.com/tklauser/go-sysconf",
					"Version": "0.3.9",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tklauser/numcpus@v0.3.0",
					"Name": "github.com/tklauser/numcpus",
					"Version": "0.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tmc/grpc-websocket-proxy@v0.0.0-20201229170055-e5319fda7802",
					"Name": "github.com/tmc/grpc-websocket-proxy",
					"Version": "0.0.0-20201229170055-e5319fda7802",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tomarrell/wrapcheck/v2@v2.4.0",
					"Name": "github.com/tomarrell/wrapcheck/v2",
					"Version": "2.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tomasen/realip@v0.0.0-20180522021738-f0c99a92ddce",
					"Name": "github.com/tomasen/realip",
					"Version": "0.0.0-20180522021738-f0c99a92ddce",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tommy-muehle/go-mnd@v1.3.1-0.20200224220436-e6f9a994e8fa",
					"Name": "github.com/tommy-muehle/go-mnd",
					"Version": "1.3.1-0.20200224220436-e6f9a994e8fa",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tommy-muehle/go-mnd/v2@v2.4.0",
					"Name": "github.com/tommy-muehle/go-mnd/v2",
					"Version": "2.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tonistiigi/fsutil@v0.0.0-20230105215944-fb433841cbfa",
					"Name": "github.com/tonistiigi/fsutil",
					"Version": "0.0.0-20230105215944-fb433841cbfa",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tonistiigi/go-actions-cache@v0.0.0-20220404170428-0bdeb6e1eac7",
					"Name": "github.com/tonistiigi/go-actions-cache",
					"Version": "0.0.0-20220404170428-0bdeb6e1eac7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tonistiigi/go-archvariant@v1.0.0",
					"Name": "github.com/tonistiigi/go-archvariant",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tonistiigi/units@v0.0.0-20180711220420-6950e57a87ea",
					"Name": "github.com/tonistiigi/units",
					"Version": "0.0.0-20180711220420-6950e57a87ea",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tonistiigi/vt100@v0.0.0-20210615222946-8066bb97264f",
					"Name": "github.com/tonistiigi/vt100",
					"Version": "0.0.0-20210615222946-8066bb97264f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/transparency-dev/merkle@v0.0.1",
					"Name": "github.com/transparency-dev/merkle",
					"Version": "0.0.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/tv42/httpunix@v0.0.0-20191220191345-2ba4b9c3382c",
					"Name": "github.com/tv42/httpunix",
					"Version": "0.0.0-20191220191345-2ba4b9c3382c",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/twitchtv/twirp@v8.1.2+incompatible",
					"Name": "github.com/twitchtv/twirp",
					"Version": "8.1.2+incompatible",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/uber/jaeger-client-go@v2.25.0+incompatible",
					"Name": "github.com/uber/jaeger-client-go",
					"Version": "2.25.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/uber/jaeger-lib@v2.2.0+incompatible",
					"Name": "github.com/uber/jaeger-lib",
					"Version": "2.2.0+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ugorji/go@v1.2.7",
					"Name": "github.com/ugorji/go",
					"Version": "1.2.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ugorji/go/codec@v1.2.7",
					"Name": "github.com/ugorji/go/codec",
					"Version": "1.2.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ulikunitz/xz@v0.5.10",
					"Name": "github.com/ulikunitz/xz",
					"Version": "0.5.10",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ultraware/funlen@v0.0.3",
					"Name": "github.com/ultraware/funlen",
					"Version": "0.0.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ultraware/whitespace@v0.0.4",
					"Name": "github.com/ultraware/whitespace",
					"Version": "0.0.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/urfave/cli@v1.22.7",
					"Name": "github.com/urfave/cli",
					"Version": "1.22.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/urfave/cli/v2@v2.3.0",
					"Name": "github.com/urfave/cli/v2",
					"Version": "2.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/uudashr/gocognit@v1.0.5",
					"Name": "github.com/uudashr/gocognit",
					"Version": "1.0.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/valyala/bytebufferpool@v1.0.0",
					"Name": "github.com/valyala/bytebufferpool",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/valyala/fasthttp@v1.30.0",
					"Name": "github.com/valyala/fasthttp",
					"Version": "1.30.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/valyala/fasttemplate@v1.2.1",
					"Name": "github.com/valyala/fasttemplate",
					"Version": "1.2.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/valyala/quicktemplate@v1.7.0",
					"Name": "github.com/valyala/quicktemplate",
					"Version": "1.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/valyala/tcplisten@v1.0.0",
					"Name": "github.com/valyala/tcplisten",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/vbatts/tar-split@v0.11.2",
					"Name": "github.com/vbatts/tar-split",
					"Version": "0.11.2",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/sirupsen/logrus@v1.9.0",
						"github.com/urfave/cli@v1.22.7"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/vdemeester/k8s-pkg-credentialprovider@v1.17.4",
					"Name": "github.com/vdemeester/k8s-pkg-credentialprovider",
					"Version": "1.17.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/veraison/go-cose@v1.0.0-rc.1",
					"Name": "github.com/veraison/go-cose",
					"Version": "1.0.0-rc.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/viki-org/dnscache@v0.0.0-20130720023526-c70c1f23c5d8",
					"Name": "github.com/viki-org/dnscache",
					"Version": "0.0.0-20130720023526-c70c1f23c5d8",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/vishvananda/netlink@v1.1.1-0.20210330154013-f5de75959ad5",
					"Name": "github.com/vishvananda/netlink",
					"Version": "1.1.1-0.20210330154013-f5de75959ad5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/vishvananda/netns@v0.0.0-20210104183010-2eb08e3e575f",
					"Name": "github.com/vishvananda/netns",
					"Version": "0.0.0-20210104183010-2eb08e3e575f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/vmihailenco/msgpack@v3.3.3+incompatible",
					"Name": "github.com/vmihailenco/msgpack",
					"Version": "3.3.3+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/vmihailenco/msgpack/v4@v4.3.12",
					"Name": "github.com/vmihailenco/msgpack/v4",
					"Version": "4.3.12",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/vmihailenco/msgpack/v5@v5.3.5",
					"Name": "github.com/vmihailenco/msgpack/v5",
					"Version": "5.3.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/vmihailenco/tagparser@v0.1.1",
					"Name": "github.com/vmihailenco/tagparser",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/vmihailenco/tagparser/v2@v2.0.0",
					"Name": "github.com/vmihailenco/tagparser/v2",
					"Version": "2.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/vmware/govmomi@v0.20.3",
					"Name": "github.com/vmware/govmomi",
					"Version": "0.20.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/weppos/publicsuffix-go@v0.20.1-0.20220816172225-dd1d64803c15",
					"Name": "github.com/weppos/publicsuffix-go",
					"Version": "0.20.1-0.20220816172225-dd1d64803c15",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/weppos/publicsuffix-go/publicsuffix/generator@v0.0.0-20220704091424-e0182326a282",
					"Name": "github.com/weppos/publicsuffix-go/publicsuffix/generator",
					"Version": "0.0.0-20220704091424-e0182326a282",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/willf/bitset@v1.1.11",
					"Name": "github.com/willf/bitset",
					"Version": "1.1.11",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/x448/float16@v0.8.4",
					"Name": "github.com/x448/float16",
					"Version": "0.8.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/xanzy/go-gitlab@v0.32.0",
					"Name": "github.com/xanzy/go-gitlab",
					"Version": "0.32.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/xanzy/ssh-agent@v0.3.3",
					"Name": "github.com/xanzy/ssh-agent",
					"Version": "0.3.3",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/Microsoft/go-winio@v0.6.0",
						"golang.org/x/crypto@v0.5.0",
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/xdg-go/pbkdf2@v1.0.0",
					"Name": "github.com/xdg-go/pbkdf2",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/xdg-go/scram@v1.1.1",
					"Name": "github.com/xdg-go/scram",
					"Version": "1.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/xdg-go/stringprep@v1.0.3",
					"Name": "github.com/xdg-go/stringprep",
					"Version": "1.0.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/xeipuuv/gojsonpointer@v0.0.0-20190905194746-02993c407bfb",
					"Name": "github.com/xeipuuv/gojsonpointer",
					"Version": "0.0.0-20190905194746-02993c407bfb",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/xeipuuv/gojsonreference@v0.0.0-20180127040603-bd5ef7bd5415",
					"Name": "github.com/xeipuuv/gojsonreference",
					"Version": "0.0.0-20180127040603-bd5ef7bd5415",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/xeipuuv/gojsonschema@v1.2.0",
					"Name": "github.com/xeipuuv/gojsonschema",
					"Version": "1.2.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1",
						"github.com/xeipuuv/gojsonreference@v0.0.0-20180127040603-bd5ef7bd5415"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/xi2/xz@v0.0.0-20171230120015-48954b6210f8",
					"Name": "github.com/xi2/xz",
					"Version": "0.0.0-20171230120015-48954b6210f8",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/xiang90/probing@v0.0.0-20190116061207-43a291ad63a2",
					"Name": "github.com/xiang90/probing",
					"Version": "0.0.0-20190116061207-43a291ad63a2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/xlab/treeprint@v1.1.0",
					"Name": "github.com/xlab/treeprint",
					"Version": "1.1.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/xo/terminfo@v0.0.0-20210125001918-ca9a967f8778",
					"Name": "github.com/xo/terminfo",
					"Version": "0.0.0-20210125001918-ca9a967f8778",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/xordataexchange/crypt@v0.0.3-0.20170626215501-b2862e3d0a77",
					"Name": "github.com/xordataexchange/crypt",
					"Version": "0.0.3-0.20170626215501-b2862e3d0a77",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/yashtewari/glob-intersection@v0.1.0",
					"Name": "github.com/yashtewari/glob-intersection",
					"Version": "0.1.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/yeya24/promlinter@v0.1.0",
					"Name": "github.com/yeya24/promlinter",
					"Version": "0.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/youmark/pkcs8@v0.0.0-20181117223130-1be2e3e5546d",
					"Name": "github.com/youmark/pkcs8",
					"Version": "0.0.0-20181117223130-1be2e3e5546d",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ysmood/goob@v0.4.0",
					"Name": "github.com/ysmood/goob",
					"Version": "0.4.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ysmood/got@v0.31.3",
					"Name": "github.com/ysmood/got",
					"Version": "0.31.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ysmood/gotrace@v0.6.0",
					"Name": "github.com/ysmood/gotrace",
					"Version": "0.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ysmood/gson@v0.7.2",
					"Name": "github.com/ysmood/gson",
					"Version": "0.7.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ysmood/leakless@v0.8.0",
					"Name": "github.com/ysmood/leakless",
					"Version": "0.8.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/yudai/gojsondiff@v1.0.0",
					"Name": "github.com/yudai/gojsondiff",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/yudai/golcs@v0.0.0-20170316035057-ecda9a501e82",
					"Name": "github.com/yudai/golcs",
					"Version": "0.0.0-20170316035057-ecda9a501e82",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/yudai/pp@v2.0.1+incompatible",
					"Name": "github.com/yudai/pp",
					"Version": "2.0.1+incompatible",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/yuin/goldmark@v1.4.13",
					"Name": "github.com/yuin/goldmark",
					"Version": "1.4.13",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/yuin/gopher-lua@v0.0.0-20210529063254-f4c35e4016d9",
					"Name": "github.com/yuin/gopher-lua",
					"Version": "0.0.0-20210529063254-f4c35e4016d9",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/chzyer/readline@v1.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/yvasiyarov/go-metrics@v0.0.0-20140926110328-57bccd1ccd43",
					"Name": "github.com/yvasiyarov/go-metrics",
					"Version": "0.0.0-20140926110328-57bccd1ccd43",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/yvasiyarov/gorelic@v0.0.0-20141212073537-a9bba5b9ab50",
					"Name": "github.com/yvasiyarov/gorelic",
					"Version": "0.0.0-20141212073537-a9bba5b9ab50",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/yvasiyarov/newrelic_platform_go@v0.0.0-20140908184405-b21fdbd4370f",
					"Name": "github.com/yvasiyarov/newrelic_platform_go",
					"Version": "0.0.0-20140908184405-b21fdbd4370f",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/zalando/go-keyring@v0.1.1",
					"Name": "github.com/zalando/go-keyring",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/zclconf/go-cty@v1.10.0",
					"Name": "github.com/zclconf/go-cty",
					"Version": "1.10.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/google/go-cmp@v0.5.9",
						"github.com/vmihailenco/msgpack/v4@v4.3.12",
						"golang.org/x/text@v0.7.0",
						"github.com/apparentlymart/go-textseg/v13@v13.0.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/zclconf/go-cty-debug@v0.0.0-20191215020915-b22d67c1ba0b",
					"Name": "github.com/zclconf/go-cty-debug",
					"Version": "0.0.0-20191215020915-b22d67c1ba0b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/zclconf/go-cty-yaml@v1.0.2",
					"Name": "github.com/zclconf/go-cty-yaml",
					"Version": "1.0.2",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/zclconf/go-cty@v1.10.0"
					],
					"Layer": {}
				},
				{
					"ID": "github.com/zeebo/errs@v1.2.2",
					"Name": "github.com/zeebo/errs",
					"Version": "1.2.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/zenazn/goji@v0.9.0",
					"Name": "github.com/zenazn/goji",
					"Version": "0.9.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/ziutek/mymysql@v1.5.4",
					"Name": "github.com/ziutek/mymysql",
					"Version": "1.5.4",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/zmap/rc2@v0.0.0-20131011165748-24b9757f5521",
					"Name": "github.com/zmap/rc2",
					"Version": "0.0.0-20131011165748-24b9757f5521",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/zmap/zcertificate@v0.0.0-20180516150559-0e3d58b1bac4",
					"Name": "github.com/zmap/zcertificate",
					"Version": "0.0.0-20180516150559-0e3d58b1bac4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/zmap/zcrypto@v0.0.0-20210811211718-6f9bc4aff20f",
					"Name": "github.com/zmap/zcrypto",
					"Version": "0.0.0-20210811211718-6f9bc4aff20f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "github.com/zmap/zlint/v3@v3.3.1-0.20211019173530-cb17369b4628",
					"Name": "github.com/zmap/zlint/v3",
					"Version": "3.3.1-0.20211019173530-cb17369b4628",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/bbolt@v1.3.6",
					"Name": "go.etcd.io/bbolt",
					"Version": "1.3.6",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd@v0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"Name": "go.etcd.io/etcd",
					"Version": "0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd/api/v3@v3.5.6",
					"Name": "go.etcd.io/etcd/api/v3",
					"Version": "3.5.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd/client/pkg/v3@v3.5.6",
					"Name": "go.etcd.io/etcd/client/pkg/v3",
					"Version": "3.5.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd/client/v2@v2.305.6",
					"Name": "go.etcd.io/etcd/client/v2",
					"Version": "2.305.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd/client/v3@v3.5.6",
					"Name": "go.etcd.io/etcd/client/v3",
					"Version": "3.5.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd/etcdctl/v3@v3.5.4",
					"Name": "go.etcd.io/etcd/etcdctl/v3",
					"Version": "3.5.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd/etcdutl/v3@v3.5.4",
					"Name": "go.etcd.io/etcd/etcdutl/v3",
					"Version": "3.5.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd/pkg/v3@v3.5.5",
					"Name": "go.etcd.io/etcd/pkg/v3",
					"Version": "3.5.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd/raft/v3@v3.5.5",
					"Name": "go.etcd.io/etcd/raft/v3",
					"Version": "3.5.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd/server/v3@v3.5.5",
					"Name": "go.etcd.io/etcd/server/v3",
					"Version": "3.5.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd/tests/v3@v3.5.4",
					"Name": "go.etcd.io/etcd/tests/v3",
					"Version": "3.5.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.etcd.io/etcd/v3@v3.5.4",
					"Name": "go.etcd.io/etcd/v3",
					"Version": "3.5.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.mongodb.org/mongo-driver@v1.10.0",
					"Name": "go.mongodb.org/mongo-driver",
					"Version": "1.10.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/klauspost/compress@v1.15.12",
						"github.com/kr/pretty@v0.3.0",
						"github.com/pkg/errors@v0.9.1",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/xdg-go/scram@v1.1.1",
						"golang.org/x/crypto@v0.5.0",
						"github.com/golang/snappy@v0.0.4",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/montanaflynn/stats@v0.6.6",
						"github.com/tidwall/pretty@v1.2.0",
						"github.com/xdg-go/stringprep@v1.0.3",
						"github.com/youmark/pkcs8@v0.0.0-20181117223130-1be2e3e5546d",
						"golang.org/x/sync@v0.1.0"
					],
					"Layer": {}
				},
				{
					"ID": "go.mozilla.org/mozlog@v0.0.0-20170222151521-4bb13139d403",
					"Name": "go.mozilla.org/mozlog",
					"Version": "0.0.0-20170222151521-4bb13139d403",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.mozilla.org/pkcs7@v0.0.0-20200128120323-432b2356ecb1",
					"Name": "go.mozilla.org/pkcs7",
					"Version": "0.0.0-20200128120323-432b2356ecb1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opencensus.io@v0.24.0",
					"Name": "go.opencensus.io",
					"Version": "0.24.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"google.golang.org/grpc@v1.52.0",
						"github.com/golang/groupcache@v0.0.0-20210331224755-41bb18bfe9da",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/net@v0.7.0"
					],
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/contrib@v1.6.0",
					"Name": "go.opentelemetry.io/contrib",
					"Version": "1.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc@v0.35.0",
					"Name": "go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc",
					"Version": "0.35.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/contrib/instrumentation/net/http/httptrace/otelhttptrace@v0.29.0",
					"Name": "go.opentelemetry.io/contrib/instrumentation/net/http/httptrace/otelhttptrace",
					"Version": "0.29.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp@v0.35.0",
					"Name": "go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp",
					"Version": "0.35.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/contrib/propagators@v0.19.0",
					"Name": "go.opentelemetry.io/contrib/propagators",
					"Version": "0.19.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel@v1.11.1",
					"Name": "go.opentelemetry.io/otel",
					"Version": "1.11.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-logr/logr@v1.2.3",
						"github.com/go-logr/stdr@v1.2.2",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/stretchr/testify@v1.8.1",
						"go.opentelemetry.io/otel/trace@v1.11.1"
					],
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/exporters/jaeger@v1.4.1",
					"Name": "go.opentelemetry.io/otel/exporters/jaeger",
					"Version": "1.4.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/exporters/otlp@v0.20.0",
					"Name": "go.opentelemetry.io/otel/exporters/otlp",
					"Version": "0.20.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/exporters/otlp/internal/retry@v1.10.0",
					"Name": "go.opentelemetry.io/otel/exporters/otlp/internal/retry",
					"Version": "1.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/exporters/otlp/otlptrace@v1.10.0",
					"Name": "go.opentelemetry.io/otel/exporters/otlp/otlptrace",
					"Version": "1.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc@v1.10.0",
					"Name": "go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc",
					"Version": "1.10.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp@v1.4.1",
					"Name": "go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp",
					"Version": "1.4.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/internal/metric@v0.27.0",
					"Name": "go.opentelemetry.io/otel/internal/metric",
					"Version": "0.27.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/metric@v0.31.0",
					"Name": "go.opentelemetry.io/otel/metric",
					"Version": "0.31.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/oteltest@v0.20.0",
					"Name": "go.opentelemetry.io/otel/oteltest",
					"Version": "0.20.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/sdk@v1.11.1",
					"Name": "go.opentelemetry.io/otel/sdk",
					"Version": "1.11.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/sdk/export/metric@v0.20.0",
					"Name": "go.opentelemetry.io/otel/sdk/export/metric",
					"Version": "0.20.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/sdk/metric@v0.20.0",
					"Name": "go.opentelemetry.io/otel/sdk/metric",
					"Version": "0.20.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/otel/trace@v1.11.1",
					"Name": "go.opentelemetry.io/otel/trace",
					"Version": "1.11.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"go.opentelemetry.io/otel@v1.11.1",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "go.opentelemetry.io/proto/otlp@v0.19.0",
					"Name": "go.opentelemetry.io/proto/otlp",
					"Version": "0.19.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.starlark.net@v0.0.0-20200306205701-8dd3e2ee1dd5",
					"Name": "go.starlark.net",
					"Version": "0.0.0-20200306205701-8dd3e2ee1dd5",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/chzyer/readline@v1.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "go.step.sm/crypto@v0.21.0",
					"Name": "go.step.sm/crypto",
					"Version": "0.21.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.uber.org/atomic@v1.10.0",
					"Name": "go.uber.org/atomic",
					"Version": "1.10.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "go.uber.org/automaxprocs@v1.5.1",
					"Name": "go.uber.org/automaxprocs",
					"Version": "1.5.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.uber.org/goleak@v1.2.0",
					"Name": "go.uber.org/goleak",
					"Version": "1.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1",
						"golang.org/x/lint@v0.0.0-20210508222113-6edffad5e616"
					],
					"Layer": {}
				},
				{
					"ID": "go.uber.org/multierr@v1.8.0",
					"Name": "go.uber.org/multierr",
					"Version": "1.8.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/stretchr/testify@v1.8.1",
						"go.uber.org/atomic@v1.10.0"
					],
					"Layer": {}
				},
				{
					"ID": "go.uber.org/tools@v0.0.0-20190618225709-2cfd321de3ee",
					"Name": "go.uber.org/tools",
					"Version": "0.0.0-20190618225709-2cfd321de3ee",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "go.uber.org/zap@v1.24.0",
					"Name": "go.uber.org/zap",
					"Version": "1.24.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"go.uber.org/atomic@v1.10.0",
						"go.uber.org/goleak@v1.2.0",
						"go.uber.org/multierr@v1.8.0",
						"gopkg.in/yaml.v3@v3.0.1",
						"github.com/pkg/errors@v0.9.1",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/benbjohnson/clock@v1.1.0"
					],
					"Layer": {}
				},
				{
					"ID": "go4.org@v0.0.0-20180809161055-417644f6feb5",
					"Name": "go4.org",
					"Version": "0.0.0-20180809161055-417644f6feb5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gocloud.dev@v0.24.1-0.20211119014450-028788aaaa4c",
					"Name": "gocloud.dev",
					"Version": "0.24.1-0.20211119014450-028788aaaa4c",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "goji.io/v3@v3.0.0",
					"Name": "goji.io/v3",
					"Version": "3.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/build@v0.0.0-20190314133821-5284462c4bec",
					"Name": "golang.org/x/build",
					"Version": "0.0.0-20190314133821-5284462c4bec",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/crypto@v0.5.0",
					"Name": "golang.org/x/crypto",
					"Version": "0.5.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/term@v0.5.0",
						"golang.org/x/net@v0.7.0",
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "golang.org/x/exp@v0.0.0-20220823124025-807a23277127",
					"Name": "golang.org/x/exp",
					"Version": "0.0.0-20220823124025-807a23277127",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/mod@v0.8.0",
						"golang.org/x/tools@v0.2.0",
						"github.com/google/go-cmp@v0.5.9"
					],
					"Layer": {}
				},
				{
					"ID": "golang.org/x/image@v0.0.0-20190802002840-cff245a6509b",
					"Name": "golang.org/x/image",
					"Version": "0.0.0-20190802002840-cff245a6509b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/lint@v0.0.0-20210508222113-6edffad5e616",
					"Name": "golang.org/x/lint",
					"Version": "0.0.0-20210508222113-6edffad5e616",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/tools@v0.2.0"
					],
					"Layer": {}
				},
				{
					"ID": "golang.org/x/mobile@v0.0.0-20190719004257-d2bd2a29d028",
					"Name": "golang.org/x/mobile",
					"Version": "0.0.0-20190719004257-d2bd2a29d028",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/mod@v0.8.0",
					"Name": "golang.org/x/mod",
					"Version": "0.8.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/tools@v0.2.0"
					],
					"Layer": {}
				},
				{
					"ID": "golang.org/x/net@v0.7.0",
					"Name": "golang.org/x/net",
					"Version": "0.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/oauth2@v0.1.0",
					"Name": "golang.org/x/oauth2",
					"Version": "0.1.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"golang.org/x/net@v0.7.0",
						"google.golang.org/appengine@v1.6.7",
						"cloud.google.com/go/compute@v1.14.0",
						"github.com/google/go-cmp@v0.5.9"
					],
					"Layer": {}
				},
				{
					"ID": "golang.org/x/perf@v0.0.0-20180704124530-6e6d33e29852",
					"Name": "golang.org/x/perf",
					"Version": "0.0.0-20180704124530-6e6d33e29852",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/sync@v0.1.0",
					"Name": "golang.org/x/sync",
					"Version": "0.1.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/sys@v0.5.0",
					"Name": "golang.org/x/sys",
					"Version": "0.5.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/term@v0.5.0",
					"Name": "golang.org/x/term",
					"Version": "0.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/text@v0.7.0",
					"Name": "golang.org/x/text",
					"Version": "0.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/time@v0.1.0",
					"Name": "golang.org/x/time",
					"Version": "0.1.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/tools@v0.2.0",
					"Name": "golang.org/x/tools",
					"Version": "0.2.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/yuin/goldmark@v1.4.13",
						"golang.org/x/mod@v0.8.0",
						"golang.org/x/net@v0.7.0",
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "golang.org/x/vuln@v0.0.0-20211221130724-9d39a965865f",
					"Name": "golang.org/x/vuln",
					"Version": "0.0.0-20211221130724-9d39a965865f",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "golang.org/x/xerrors@v0.0.0-20220907171357-04be3eba64a2",
					"Name": "golang.org/x/xerrors",
					"Version": "0.0.0-20220907171357-04be3eba64a2",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gonum.org/v1/gonum@v0.7.0",
					"Name": "gonum.org/v1/gonum",
					"Version": "0.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gonum.org/v1/netlib@v0.0.0-20190331212654-76723241ea4e",
					"Name": "gonum.org/v1/netlib",
					"Version": "0.0.0-20190331212654-76723241ea4e",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gonum.org/v1/plot@v0.0.0-20190515093506-e2840ee46a6b",
					"Name": "gonum.org/v1/plot",
					"Version": "0.0.0-20190515093506-e2840ee46a6b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "google.golang.org/api@v0.107.0",
					"Name": "google.golang.org/api",
					"Version": "0.107.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/google/go-cmp@v0.5.9",
						"golang.org/x/oauth2@v0.1.0",
						"golang.org/x/sync@v0.1.0",
						"google.golang.org/appengine@v1.6.7",
						"github.com/googleapis/gax-go/v2@v2.7.0",
						"golang.org/x/net@v0.7.0",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
						"google.golang.org/protobuf@v1.28.1",
						"google.golang.org/grpc@v1.52.0",
						"cloud.google.com/go/compute/metadata@v0.2.3",
						"github.com/google/uuid@v1.3.0",
						"github.com/googleapis/enterprise-certificate-proxy@v0.2.1",
						"go.opencensus.io@v0.24.0"
					],
					"Layer": {}
				},
				{
					"ID": "google.golang.org/appengine@v1.6.7",
					"Name": "google.golang.org/appengine",
					"Version": "1.6.7",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/golang/protobuf@v1.5.2",
						"golang.org/x/net@v0.7.0",
						"golang.org/x/text@v0.7.0"
					],
					"Layer": {}
				},
				{
					"ID": "google.golang.org/cloud@v0.0.0-20151119220103-975617b05ea8",
					"Name": "google.golang.org/cloud",
					"Version": "0.0.0-20151119220103-975617b05ea8",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
					"Name": "google.golang.org/genproto",
					"Version": "0.0.0-20221227171554-f9683d7f8bef",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"cloud.google.com/go/orchestration@v1.4.0",
						"cloud.google.com/go/pubsub@v1.27.1",
						"cloud.google.com/go/recommendationengine@v0.6.0",
						"cloud.google.com/go/networkmanagement@v1.5.0",
						"cloud.google.com/go/run@v0.3.0",
						"cloud.google.com/go/servicedirectory@v1.7.0",
						"cloud.google.com/go/dataproc@v1.8.0",
						"cloud.google.com/go/filestore@v1.4.0",
						"cloud.google.com/go/gkebackup@v0.3.0",
						"cloud.google.com/go@v0.105.0",
						"cloud.google.com/go/networkconnectivity@v1.7.0",
						"cloud.google.com/go/lifesciences@v0.6.0",
						"cloud.google.com/go/serviceusage@v1.4.0",
						"github.com/golang/protobuf@v1.5.2",
						"cloud.google.com/go/apigateway@v1.4.0",
						"cloud.google.com/go/area120@v0.6.0",
						"cloud.google.com/go/notebooks@v1.5.0",
						"cloud.google.com/go/dialogflow@v1.19.0",
						"cloud.google.com/go/eventarc@v1.8.0",
						"cloud.google.com/go/maps@v0.1.0",
						"cloud.google.com/go/phishingprotection@v0.6.0",
						"cloud.google.com/go/resourcemanager@v1.4.0",
						"cloud.google.com/go/analytics@v0.12.0",
						"cloud.google.com/go/dataflow@v0.7.0",
						"cloud.google.com/go/dataform@v0.5.0",
						"cloud.google.com/go/contactcenterinsights@v1.4.0",
						"cloud.google.com/go/container@v1.7.0",
						"cloud.google.com/go/firestore@v1.9.0",
						"cloud.google.com/go/accesscontextmanager@v1.4.0",
						"cloud.google.com/go/recommender@v1.8.0",
						"cloud.google.com/go/recaptchaenterprise/v2@v2.5.0",
						"cloud.google.com/go/datalabeling@v0.6.0",
						"cloud.google.com/go/functions@v1.9.0",
						"cloud.google.com/go/gkehub@v0.10.0",
						"cloud.google.com/go/bigquery@v1.44.0",
						"cloud.google.com/go/longrunning@v0.3.0",
						"cloud.google.com/go/vision/v2@v2.5.0",
						"cloud.google.com/go/monitoring@v1.8.0",
						"cloud.google.com/go/policytroubleshooter@v1.4.0",
						"cloud.google.com/go/privatecatalog@v0.6.0",
						"cloud.google.com/go/scheduler@v1.7.0",
						"cloud.google.com/go/texttospeech@v1.5.0",
						"cloud.google.com/go/aiplatform@v1.27.0",
						"cloud.google.com/go/beyondcorp@v0.3.0",
						"cloud.google.com/go/documentai@v1.10.0",
						"cloud.google.com/go/mediatranslation@v0.6.0",
						"cloud.google.com/go/datastore@v1.10.0",
						"cloud.google.com/go/domains@v0.7.0",
						"cloud.google.com/go/iot@v1.4.0",
						"cloud.google.com/go/datacatalog@v1.8.0",
						"cloud.google.com/go/datastream@v1.5.0",
						"cloud.google.com/go/essentialcontacts@v1.4.0",
						"cloud.google.com/go/compute@v1.14.0",
						"cloud.google.com/go/webrisk@v1.7.0",
						"cloud.google.com/go/servicecontrol@v1.5.0",
						"cloud.google.com/go/datafusion@v1.5.0",
						"cloud.google.com/go/iap@v1.5.0",
						"cloud.google.com/go/oslogin@v1.7.0",
						"cloud.google.com/go/gkeconnect@v0.6.0",
						"cloud.google.com/go/vmwareengine@v0.1.0",
						"cloud.google.com/go/containeranalysis@v0.6.0",
						"cloud.google.com/go/optimization@v1.2.0",
						"cloud.google.com/go/vmmigration@v1.3.0",
						"cloud.google.com/go/assuredworkloads@v1.9.0",
						"cloud.google.com/go/memcache@v1.7.0",
						"cloud.google.com/go/securitycenter@v1.16.0",
						"cloud.google.com/go/metastore@v1.8.0",
						"cloud.google.com/go/secretmanager@v1.9.0",
						"cloud.google.com/go/networksecurity@v0.6.0",
						"cloud.google.com/go/shell@v1.4.0",
						"cloud.google.com/go/translate@v1.4.0",
						"cloud.google.com/go/asset@v1.10.0",
						"cloud.google.com/go/certificatemanager@v1.4.0",
						"cloud.google.com/go/gkemulticloud@v0.4.0",
						"cloud.google.com/go/resourcesettings@v1.4.0",
						"cloud.google.com/go/channel@v1.9.0",
						"cloud.google.com/go/dataplex@v1.4.0",
						"cloud.google.com/go/gaming@v1.8.0",
						"cloud.google.com/go/edgecontainer@v0.2.0",
						"cloud.google.com/go/errorreporting@v0.3.0",
						"cloud.google.com/go/gsuiteaddons@v1.4.0",
						"cloud.google.com/go/deploy@v1.5.0",
						"cloud.google.com/go/trace@v1.4.0",
						"cloud.google.com/go/websecurityscanner@v1.4.0",
						"cloud.google.com/go/batch@v0.4.0",
						"cloud.google.com/go/osconfig@v1.10.0",
						"cloud.google.com/go/talent@v1.4.0",
						"cloud.google.com/go/storagetransfer@v1.6.0",
						"cloud.google.com/go/artifactregistry@v1.9.0",
						"cloud.google.com/go/billing@v1.7.0",
						"cloud.google.com/go/speech@v1.9.0",
						"cloud.google.com/go/logging@v1.6.1",
						"cloud.google.com/go/managedidentities@v1.4.0",
						"cloud.google.com/go/workflows@v1.9.0",
						"cloud.google.com/go/vpcaccess@v1.5.0",
						"cloud.google.com/go/iam@v0.8.0",
						"cloud.google.com/go/ids@v1.2.0",
						"google.golang.org/grpc@v1.52.0",
						"cloud.google.com/go/baremetalsolution@v0.4.0",
						"cloud.google.com/go/dataqna@v0.6.0",
						"cloud.google.com/go/dlp@v1.7.0",
						"cloud.google.com/go/tpu@v1.4.0",
						"cloud.google.com/go/apigeeconnect@v1.4.0",
						"cloud.google.com/go/cloudbuild@v1.4.0",
						"cloud.google.com/go/clouddms@v1.4.0",
						"cloud.google.com/go/servicemanagement@v1.5.0",
						"cloud.google.com/go/videointelligence@v1.9.0",
						"cloud.google.com/go/binaryauthorization@v1.4.0",
						"cloud.google.com/go/language@v1.8.0",
						"cloud.google.com/go/pubsublite@v1.5.0",
						"cloud.google.com/go/orgpolicy@v1.5.0",
						"cloud.google.com/go/redis@v1.10.0",
						"cloud.google.com/go/retail@v1.11.0",
						"cloud.google.com/go/security@v1.10.0",
						"cloud.google.com/go/video@v1.9.0",
						"cloud.google.com/go/appengine@v1.5.0",
						"cloud.google.com/go/automl@v1.8.0",
						"cloud.google.com/go/cloudtasks@v1.8.0",
						"google.golang.org/protobuf@v1.28.1",
						"cloud.google.com/go/accessapproval@v1.5.0",
						"cloud.google.com/go/kms@v1.6.0",
						"cloud.google.com/go/spanner@v1.41.0"
					],
					"Layer": {}
				},
				{
					"ID": "google.golang.org/grpc@v1.52.0",
					"Name": "google.golang.org/grpc",
					"Version": "1.52.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/cncf/udpa/go@v0.0.0-20210930031921-04548b0d99d4",
						"golang.org/x/net@v0.7.0",
						"golang.org/x/oauth2@v0.1.0",
						"golang.org/x/sys@v0.5.0",
						"github.com/envoyproxy/go-control-plane@v0.10.2-0.20220325020618-49ff273808a1",
						"google.golang.org/protobuf@v1.28.1",
						"github.com/cncf/xds/go@v0.0.0-20211011173535-cb28da3451f1",
						"github.com/golang/glog@v1.0.0",
						"github.com/google/uuid@v1.3.0",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
						"github.com/cespare/xxhash/v2@v2.1.2",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/google/go-cmp@v0.5.9"
					],
					"Layer": {}
				},
				{
					"ID": "google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2.0",
					"Name": "google.golang.org/grpc/cmd/protoc-gen-go-grpc",
					"Version": "1.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "google.golang.org/grpc/examples@v0.0.0-20201130180447-c456688b1860",
					"Name": "google.golang.org/grpc/examples",
					"Version": "0.0.0-20201130180447-c456688b1860",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "google.golang.org/protobuf@v1.28.1",
					"Name": "google.golang.org/protobuf",
					"Version": "1.28.1",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/golang/protobuf@v1.5.2",
						"github.com/google/go-cmp@v0.5.9"
					],
					"Layer": {}
				},
				{
					"ID": "gopkg.in/airbrake/gobrake.v2@v2.0.9",
					"Name": "gopkg.in/airbrake/gobrake.v2",
					"Version": "2.0.9",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/alecthomas/kingpin.v2@v2.2.6",
					"Name": "gopkg.in/alecthomas/kingpin.v2",
					"Version": "2.2.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/alexcesaro/statsd.v2@v2.0.0",
					"Name": "gopkg.in/alexcesaro/statsd.v2",
					"Version": "2.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/check.v1@v1.0.0-20201130134442-10cb98267c6c",
					"Name": "gopkg.in/check.v1",
					"Version": "1.0.0-20201130134442-10cb98267c6c",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/kr/pretty@v0.3.0"
					],
					"Layer": {}
				},
				{
					"ID": "gopkg.in/cheggaaa/pb.v1@v1.0.28",
					"Name": "gopkg.in/cheggaaa/pb.v1",
					"Version": "1.0.28",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/errgo.v2@v2.1.0",
					"Name": "gopkg.in/errgo.v2",
					"Version": "2.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/fsnotify.v1@v1.4.7",
					"Name": "gopkg.in/fsnotify.v1",
					"Version": "1.4.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/gcfg.v1@v1.2.3",
					"Name": "gopkg.in/gcfg.v1",
					"Version": "1.2.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/gemnasium/logrus-airbrake-hook.v2@v2.1.2",
					"Name": "gopkg.in/gemnasium/logrus-airbrake-hook.v2",
					"Version": "2.1.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/go-playground/assert.v1@v1.2.1",
					"Name": "gopkg.in/go-playground/assert.v1",
					"Version": "1.2.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/go-playground/validator.v9@v9.31.0",
					"Name": "gopkg.in/go-playground/validator.v9",
					"Version": "9.31.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/inconshreveable/log15.v2@v2.0.0-20180818164646-67afb5ed74ec",
					"Name": "gopkg.in/inconshreveable/log15.v2",
					"Version": "2.0.0-20180818164646-67afb5ed74ec",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/inf.v0@v0.9.1",
					"Name": "gopkg.in/inf.v0",
					"Version": "0.9.1",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/ini.v1@v1.67.0",
					"Name": "gopkg.in/ini.v1",
					"Version": "1.67.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/linkedin/goavro.v1@v1.0.5",
					"Name": "gopkg.in/linkedin/goavro.v1",
					"Version": "1.0.5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/natefinch/lumberjack.v2@v2.0.0",
					"Name": "gopkg.in/natefinch/lumberjack.v2",
					"Version": "2.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/neurosnap/sentences.v1@v1.0.6",
					"Name": "gopkg.in/neurosnap/sentences.v1",
					"Version": "1.0.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/resty.v1@v1.12.0",
					"Name": "gopkg.in/resty.v1",
					"Version": "1.12.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/square/go-jose.v2@v2.6.0",
					"Name": "gopkg.in/square/go-jose.v2",
					"Version": "2.6.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/src-d/go-billy.v4@v4.3.2",
					"Name": "gopkg.in/src-d/go-billy.v4",
					"Version": "4.3.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/src-d/go-git-fixtures.v3@v3.5.0",
					"Name": "gopkg.in/src-d/go-git-fixtures.v3",
					"Version": "3.5.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/src-d/go-git.v4@v4.13.1",
					"Name": "gopkg.in/src-d/go-git.v4",
					"Version": "4.13.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/tomb.v1@v1.0.0-20141024135613-dd632973f1e7",
					"Name": "gopkg.in/tomb.v1",
					"Version": "1.0.0-20141024135613-dd632973f1e7",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/warnings.v0@v0.1.2",
					"Name": "gopkg.in/warnings.v0",
					"Version": "0.1.2",
					"Licenses": [
						"BSD-2-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gopkg.in/yaml.v2@v2.4.0",
					"Name": "gopkg.in/yaml.v2",
					"Version": "2.4.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"gopkg.in/check.v1@v1.0.0-20201130134442-10cb98267c6c"
					],
					"Layer": {}
				},
				{
					"ID": "gopkg.in/yaml.v3@v3.0.1",
					"Name": "gopkg.in/yaml.v3",
					"Version": "3.0.1",
					"Licenses": [
						"Apache-2.0",
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"gopkg.in/check.v1@v1.0.0-20201130134442-10cb98267c6c"
					],
					"Layer": {}
				},
				{
					"ID": "gotest.tools@v2.2.0+incompatible",
					"Name": "gotest.tools",
					"Version": "2.2.0+incompatible",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gotest.tools/gotestsum@v1.8.2",
					"Name": "gotest.tools/gotestsum",
					"Version": "1.8.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "gotest.tools/v3@v3.3.0",
					"Name": "gotest.tools/v3",
					"Version": "3.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "grpc.go4.org@v0.0.0-20170609214715-11d0a25b4919",
					"Name": "grpc.go4.org",
					"Version": "0.0.0-20170609214715-11d0a25b4919",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "helm.sh/helm/v3@v3.11.1",
					"Name": "helm.sh/helm/v3",
					"Version": "3.11.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/DATA-DOG/go-sqlmock@v1.5.0",
						"github.com/mattn/go-shellwords@v1.0.12",
						"github.com/gofrs/flock@v0.8.1",
						"golang.org/x/crypto@v0.5.0",
						"github.com/moby/term@v0.0.0-20221205130635-1aeaba878587",
						"github.com/phayes/freeport@v0.0.0-20220201140144-74d24b5ae9f5",
						"oras.land/oras-go@v1.2.2",
						"github.com/jmoiron/sqlx@v1.3.5",
						"k8s.io/klog/v2@v2.90.0",
						"github.com/evanphx/json-patch@v5.6.0+incompatible",
						"github.com/pkg/errors@v0.9.1",
						"github.com/Masterminds/squirrel@v1.5.3",
						"github.com/Masterminds/vcs@v1.13.3",
						"github.com/distribution/distribution/v3@v3.0.0-20221208165359-362910506bc2",
						"github.com/rubenv/sql-migrate@v1.2.0",
						"k8s.io/client-go@v0.26.1",
						"github.com/BurntSushi/toml@v1.2.1",
						"github.com/asaskevich/govalidator@v0.0.0-20210307081110-f21760c49a8d",
						"github.com/lib/pq@v1.10.7",
						"golang.org/x/text@v0.7.0",
						"k8s.io/apiextensions-apiserver@v0.26.0",
						"github.com/Masterminds/semver/v3@v3.2.0",
						"k8s.io/apiserver@v0.26.0",
						"k8s.io/cli-runtime@v0.26.1",
						"github.com/spf13/pflag@v1.0.5",
						"sigs.k8s.io/yaml@v1.3.0",
						"github.com/Masterminds/sprig/v3@v3.2.3",
						"k8s.io/apimachinery@v0.26.1",
						"github.com/cyphar/filepath-securejoin@v0.2.3",
						"github.com/gosuri/uitable@v0.0.4",
						"golang.org/x/term@v0.5.0",
						"github.com/containerd/containerd@v1.6.18",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/mitchellh/copystructure@v1.2.0",
						"github.com/sirupsen/logrus@v1.9.0",
						"github.com/opencontainers/image-spec@v1.1.0-rc2",
						"github.com/spf13/cobra@v1.6.1",
						"k8s.io/api@v0.26.1",
						"github.com/gobwas/glob@v0.2.3",
						"github.com/xeipuuv/gojsonschema@v1.2.0",
						"k8s.io/kubectl@v0.26.1"
					],
					"Layer": {}
				},
				{
					"ID": "honnef.co/go/tools@v0.2.2",
					"Name": "honnef.co/go/tools",
					"Version": "0.2.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/api@v0.26.1",
					"Name": "k8s.io/api",
					"Version": "0.26.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"k8s.io/apimachinery@v0.26.1",
						"github.com/gogo/protobuf@v1.3.2",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "k8s.io/apiextensions-apiserver@v0.26.0",
					"Name": "k8s.io/apiextensions-apiserver",
					"Version": "0.26.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
						"k8s.io/apiserver@v0.26.0",
						"github.com/gogo/protobuf@v1.3.2",
						"go.etcd.io/etcd/client/v3@v3.5.6",
						"github.com/google/gofuzz@v1.2.0",
						"go.opentelemetry.io/otel@v1.11.1",
						"sigs.k8s.io/json@v0.0.0-20220713155537-f223a00ba0e2",
						"k8s.io/code-generator@v0.26.1",
						"k8s.io/kube-openapi@v0.0.0-20221012153701-172d655c2280",
						"github.com/google/gnostic@v0.5.7-v3refs",
						"github.com/emicklei/go-restful/v3@v3.9.0",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef",
						"go.etcd.io/etcd/client/pkg/v3@v3.5.6",
						"github.com/google/go-cmp@v0.5.9",
						"k8s.io/klog/v2@v2.90.0",
						"k8s.io/api@v0.26.1",
						"github.com/spf13/pflag@v1.0.5",
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/google/uuid@v1.3.0",
						"google.golang.org/protobuf@v1.28.1",
						"k8s.io/apimachinery@v0.26.1",
						"github.com/stretchr/testify@v1.8.1",
						"go.opentelemetry.io/otel/trace@v1.11.1",
						"github.com/google/cel-go@v0.12.5",
						"k8s.io/client-go@v0.26.1",
						"google.golang.org/grpc@v1.52.0",
						"github.com/spf13/cobra@v1.6.1",
						"sigs.k8s.io/yaml@v1.3.0",
						"sigs.k8s.io/structured-merge-diff/v4@v4.2.3",
						"k8s.io/component-base@v0.26.1"
					],
					"Layer": {}
				},
				{
					"ID": "k8s.io/apimachinery@v0.26.1",
					"Name": "k8s.io/apimachinery",
					"Version": "0.26.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/google/go-cmp@v0.5.9",
						"sigs.k8s.io/yaml@v1.3.0",
						"github.com/google/gnostic@v0.5.7-v3refs",
						"github.com/google/gofuzz@v1.2.0",
						"github.com/stretchr/testify@v1.8.1",
						"github.com/davecgh/go-spew@v1.1.1",
						"github.com/evanphx/json-patch@v5.6.0+incompatible",
						"sigs.k8s.io/structured-merge-diff/v4@v4.2.3",
						"golang.org/x/net@v0.7.0",
						"gopkg.in/inf.v0@v0.9.1",
						"sigs.k8s.io/json@v0.0.0-20220713155537-f223a00ba0e2",
						"github.com/elazarl/goproxy@v0.0.0-20180725130230-947c36da3153",
						"github.com/gogo/protobuf@v1.3.2",
						"k8s.io/klog/v2@v2.90.0",
						"k8s.io/kube-openapi@v0.0.0-20221012153701-172d655c2280",
						"k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/moby/spdystream@v0.2.0",
						"github.com/mxk/go-flowrate@v0.0.0-20140419014527-cca7078d478f",
						"github.com/armon/go-socks5@v0.0.0-20160902184237-e75332964ef5",
						"github.com/google/uuid@v1.3.0",
						"github.com/spf13/pflag@v1.0.5"
					],
					"Layer": {}
				},
				{
					"ID": "k8s.io/apiserver@v0.26.0",
					"Name": "k8s.io/apiserver",
					"Version": "0.26.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"go.opentelemetry.io/otel/trace@v1.11.1",
						"golang.org/x/time@v0.1.0",
						"k8s.io/component-base@v0.26.1",
						"go.etcd.io/etcd/client/v3@v3.5.6",
						"sigs.k8s.io/json@v0.0.0-20220713155537-f223a00ba0e2",
						"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc@v1.10.0",
						"go.opentelemetry.io/otel/sdk@v1.11.1",
						"github.com/evanphx/json-patch@v5.6.0+incompatible",
						"golang.org/x/sys@v0.5.0",
						"gopkg.in/square/go-jose.v2@v2.6.0",
						"github.com/coreos/go-systemd/v22@v22.4.0",
						"github.com/google/cel-go@v0.12.5",
						"github.com/google/gnostic@v0.5.7-v3refs",
						"github.com/spf13/pflag@v1.0.5",
						"golang.org/x/crypto@v0.5.0",
						"k8s.io/apimachinery@v0.26.1",
						"sigs.k8s.io/apiserver-network-proxy/konnectivity-client@v0.0.33",
						"github.com/davecgh/go-spew@v1.1.1",
						"gopkg.in/natefinch/lumberjack.v2@v2.0.0",
						"k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
						"github.com/google/uuid@v1.3.0",
						"go.etcd.io/etcd/api/v3@v3.5.6",
						"github.com/coreos/go-oidc@v2.1.0+incompatible",
						"github.com/google/go-cmp@v0.5.9",
						"golang.org/x/sync@v0.1.0",
						"sigs.k8s.io/structured-merge-diff/v4@v4.2.3",
						"github.com/grpc-ecosystem/go-grpc-prometheus@v1.2.0",
						"google.golang.org/grpc@v1.52.0",
						"k8s.io/klog/v2@v2.90.0",
						"go.opentelemetry.io/otel@v1.11.1",
						"github.com/emicklei/go-restful/v3@v3.9.0",
						"go.etcd.io/etcd/server/v3@v3.5.5",
						"k8s.io/client-go@v0.26.1",
						"github.com/munnerz/goautoneg@v0.0.0-20191010083416-a7dc8b61c822",
						"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp@v0.35.0",
						"golang.org/x/net@v0.7.0",
						"k8s.io/kms@v0.26.0",
						"github.com/google/gofuzz@v1.2.0",
						"github.com/stretchr/testify@v1.8.1",
						"k8s.io/api@v0.26.1",
						"github.com/gogo/protobuf@v1.3.2",
						"go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc@v0.35.0",
						"google.golang.org/protobuf@v1.28.1",
						"k8s.io/kube-openapi@v0.0.0-20221012153701-172d655c2280",
						"go.uber.org/zap@v1.24.0",
						"github.com/fsnotify/fsnotify@v1.6.0",
						"sigs.k8s.io/yaml@v1.3.0",
						"go.etcd.io/etcd/client/pkg/v3@v3.5.6",
						"google.golang.org/genproto@v0.0.0-20221227171554-f9683d7f8bef"
					],
					"Layer": {}
				},
				{
					"ID": "k8s.io/cli-runtime@v0.26.1",
					"Name": "k8s.io/cli-runtime",
					"Version": "0.26.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/spf13/cobra@v1.6.1",
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/stretchr/testify@v1.8.1",
						"sigs.k8s.io/kustomize/kyaml@v0.13.9",
						"github.com/spf13/pflag@v1.0.5",
						"sigs.k8s.io/kustomize/api@v0.12.1",
						"k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
						"k8s.io/apimachinery@v0.26.1",
						"github.com/davecgh/go-spew@v1.1.1",
						"k8s.io/api@v0.26.1",
						"github.com/google/gnostic@v0.5.7-v3refs",
						"github.com/google/uuid@v1.3.0",
						"k8s.io/client-go@v0.26.1",
						"sigs.k8s.io/yaml@v1.3.0",
						"github.com/liggitt/tabwriter@v0.0.0-20181228230101-89fcab3d43de",
						"golang.org/x/text@v0.7.0",
						"github.com/evanphx/json-patch@v5.6.0+incompatible",
						"k8s.io/kube-openapi@v0.0.0-20221012153701-172d655c2280"
					],
					"Layer": {}
				},
				{
					"ID": "k8s.io/client-go@v0.26.1",
					"Name": "k8s.io/client-go",
					"Version": "0.26.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"k8s.io/apimachinery@v0.26.1",
						"k8s.io/klog/v2@v2.90.0",
						"github.com/google/gnostic@v0.5.7-v3refs",
						"golang.org/x/net@v0.7.0",
						"golang.org/x/time@v0.1.0",
						"google.golang.org/protobuf@v1.28.1",
						"github.com/golang/groupcache@v0.0.0-20210331224755-41bb18bfe9da",
						"github.com/gregjones/httpcache@v0.0.0-20190611155906-901d90724c79",
						"github.com/peterbourgon/diskv@v2.0.1+incompatible",
						"github.com/spf13/pflag@v1.0.5",
						"github.com/davecgh/go-spew@v1.1.1",
						"github.com/evanphx/json-patch@v5.6.0+incompatible",
						"github.com/google/gofuzz@v1.2.0",
						"golang.org/x/oauth2@v0.1.0",
						"k8s.io/kube-openapi@v0.0.0-20221012153701-172d655c2280",
						"k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
						"sigs.k8s.io/yaml@v1.3.0",
						"github.com/imdario/mergo@v0.3.13",
						"k8s.io/api@v0.26.1",
						"sigs.k8s.io/structured-merge-diff/v4@v4.2.3",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/google/go-cmp@v0.5.9",
						"golang.org/x/term@v0.5.0",
						"github.com/gogo/protobuf@v1.3.2",
						"github.com/google/uuid@v1.3.0",
						"github.com/stretchr/testify@v1.8.1"
					],
					"Layer": {}
				},
				{
					"ID": "k8s.io/cloud-provider@v0.17.4",
					"Name": "k8s.io/cloud-provider",
					"Version": "0.17.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/code-generator@v0.26.1",
					"Name": "k8s.io/code-generator",
					"Version": "0.26.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/component-base@v0.26.1",
					"Name": "k8s.io/component-base",
					"Version": "0.26.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/prometheus/client_golang@v1.14.0",
						"github.com/prometheus/client_model@v0.3.0",
						"github.com/prometheus/procfs@v0.8.0",
						"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc@v1.10.0",
						"github.com/moby/term@v0.0.0-20221205130635-1aeaba878587",
						"go.opentelemetry.io/otel/trace@v1.11.1",
						"sigs.k8s.io/json@v0.0.0-20220713155537-f223a00ba0e2",
						"github.com/go-logr/logr@v1.2.3",
						"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp@v0.35.0",
						"go.uber.org/zap@v1.24.0",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/prometheus/common@v0.37.0",
						"k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
						"github.com/blang/semver/v4@v4.0.0",
						"github.com/spf13/pflag@v1.0.5",
						"github.com/stretchr/testify@v1.8.1",
						"go.opentelemetry.io/otel/sdk@v1.11.1",
						"k8s.io/apimachinery@v0.26.1",
						"go.opentelemetry.io/otel@v1.11.1",
						"k8s.io/klog/v2@v2.90.0",
						"github.com/go-logr/zapr@v1.2.3",
						"golang.org/x/sys@v0.5.0",
						"github.com/spf13/cobra@v1.6.1",
						"k8s.io/client-go@v0.26.1"
					],
					"Layer": {}
				},
				{
					"ID": "k8s.io/component-helpers@v0.26.1",
					"Name": "k8s.io/component-helpers",
					"Version": "0.26.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/cri-api@v0.26.0-alpha.3",
					"Name": "k8s.io/cri-api",
					"Version": "0.26.0-alpha.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/csi-translation-lib@v0.17.4",
					"Name": "k8s.io/csi-translation-lib",
					"Version": "0.17.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/gengo@v0.0.0-20220902162205-c0856e24416d",
					"Name": "k8s.io/gengo",
					"Version": "0.0.0-20220902162205-c0856e24416d",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/klog@v1.0.0",
					"Name": "k8s.io/klog",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/klog/v2@v2.90.0",
					"Name": "k8s.io/klog/v2",
					"Version": "2.90.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/kms@v0.26.0",
					"Name": "k8s.io/kms",
					"Version": "0.26.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/kube-openapi@v0.0.0-20221012153701-172d655c2280",
					"Name": "k8s.io/kube-openapi",
					"Version": "0.0.0-20221012153701-172d655c2280",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/NYTimes/gziphandler@v1.1.1",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/google/uuid@v1.3.0",
						"gopkg.in/yaml.v3@v3.0.1",
						"github.com/spf13/pflag@v1.0.5",
						"google.golang.org/protobuf@v1.28.1",
						"github.com/golang/protobuf@v1.5.2",
						"github.com/asaskevich/govalidator@v0.0.0-20210307081110-f21760c49a8d",
						"github.com/go-openapi/swag@v0.22.3",
						"github.com/mitchellh/mapstructure@v1.5.0",
						"github.com/munnerz/goautoneg@v0.0.0-20191010083416-a7dc8b61c822",
						"github.com/go-openapi/jsonreference@v0.20.0",
						"k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
						"github.com/emicklei/go-restful/v3@v3.9.0",
						"github.com/onsi/ginkgo/v2@v2.4.0",
						"k8s.io/gengo@v0.0.0-20220902162205-c0856e24416d",
						"k8s.io/klog/v2@v2.90.0",
						"sigs.k8s.io/yaml@v1.3.0",
						"github.com/google/gnostic@v0.5.7-v3refs",
						"github.com/google/gofuzz@v1.2.0",
						"github.com/onsi/gomega@v1.23.0",
						"github.com/stretchr/testify@v1.8.1",
						"gopkg.in/yaml.v2@v2.4.0",
						"sigs.k8s.io/structured-merge-diff/v4@v4.2.3"
					],
					"Layer": {}
				},
				{
					"ID": "k8s.io/kubectl@v0.26.1",
					"Name": "k8s.io/kubectl",
					"Version": "0.26.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/go-openapi/jsonreference@v0.20.0",
						"k8s.io/api@v0.26.1",
						"k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
						"k8s.io/client-go@v0.26.1",
						"k8s.io/kube-openapi@v0.0.0-20221012153701-172d655c2280",
						"sigs.k8s.io/json@v0.0.0-20220713155537-f223a00ba0e2",
						"sigs.k8s.io/kustomize/kustomize/v4@v4.5.7",
						"github.com/jonboulle/clockwork@v0.3.0",
						"github.com/moby/term@v0.0.0-20221205130635-1aeaba878587",
						"k8s.io/cli-runtime@v0.26.1",
						"github.com/docker/distribution@v2.8.1+incompatible",
						"github.com/google/gnostic@v0.5.7-v3refs",
						"github.com/spf13/cobra@v1.6.1",
						"github.com/mitchellh/go-wordwrap@v1.0.1",
						"github.com/chai2010/gettext-go@v1.0.2",
						"github.com/evanphx/json-patch@v5.6.0+incompatible",
						"sigs.k8s.io/structured-merge-diff/v4@v4.2.3",
						"github.com/fvbommel/sortorder@v1.0.1",
						"github.com/pkg/errors@v0.9.1",
						"github.com/stretchr/testify@v1.8.1",
						"k8s.io/apimachinery@v0.26.1",
						"k8s.io/component-helpers@v0.26.1",
						"sigs.k8s.io/kustomize/kyaml@v0.13.9",
						"github.com/liggitt/tabwriter@v0.0.0-20181228230101-89fcab3d43de",
						"github.com/google/go-cmp@v0.5.9",
						"github.com/russross/blackfriday/v2@v2.1.0",
						"k8s.io/component-base@v0.26.1",
						"github.com/MakeNowJust/heredoc@v1.0.0",
						"github.com/daviddengcn/go-colortext@v1.0.0",
						"sigs.k8s.io/yaml@v1.3.0",
						"github.com/onsi/gomega@v1.23.0",
						"golang.org/x/sys@v0.5.0",
						"k8s.io/klog/v2@v2.90.0",
						"k8s.io/metrics@v0.26.1",
						"github.com/exponent-io/jsonpath@v0.0.0-20151013193312-d6023ce2651d",
						"github.com/fatih/camelcase@v1.0.0",
						"github.com/lithammer/dedent@v1.1.0",
						"github.com/spf13/pflag@v1.0.5",
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/onsi/ginkgo/v2@v2.4.0"
					],
					"Layer": {}
				},
				{
					"ID": "k8s.io/kubernetes@v1.13.0",
					"Name": "k8s.io/kubernetes",
					"Version": "1.13.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/legacy-cloud-providers@v0.17.4",
					"Name": "k8s.io/legacy-cloud-providers",
					"Version": "0.17.4",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/metrics@v0.26.1",
					"Name": "k8s.io/metrics",
					"Version": "0.26.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "k8s.io/utils@v0.0.0-20230115233650-391b47cb4029",
					"Name": "k8s.io/utils",
					"Version": "0.0.0-20230115233650-391b47cb4029",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/davecgh/go-spew@v1.1.1",
						"k8s.io/klog/v2@v2.90.0"
					],
					"Layer": {}
				},
				{
					"ID": "lukechampine.com/uint128@v1.2.0",
					"Name": "lukechampine.com/uint128",
					"Version": "1.2.0",
					"Licenses": [
						"MIT"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "modernc.org/cc@v1.0.0",
					"Name": "modernc.org/cc",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "modernc.org/cc/v3@v3.40.0",
					"Name": "modernc.org/cc/v3",
					"Version": "3.40.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/dustin/go-humanize@v1.0.1",
						"github.com/google/go-cmp@v0.5.9",
						"lukechampine.com/uint128@v1.2.0",
						"modernc.org/mathutil@v1.5.0",
						"modernc.org/strutil@v1.1.3",
						"modernc.org/token@v1.0.1"
					],
					"Layer": {}
				},
				{
					"ID": "modernc.org/ccgo/v3@v3.16.13",
					"Name": "modernc.org/ccgo/v3",
					"Version": "3.16.13",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"modernc.org/cc/v3@v3.40.0",
						"github.com/dustin/go-humanize@v1.0.1",
						"golang.org/x/sys@v0.5.0",
						"github.com/pmezard/go-difflib@v1.0.0",
						"github.com/kballard/go-shellquote@v0.0.0-20180428030007-95032a82bc51",
						"modernc.org/mathutil@v1.5.0",
						"modernc.org/libc@v1.22.2",
						"modernc.org/opt@v0.1.3",
						"golang.org/x/tools@v0.2.0",
						"modernc.org/ccorpus@v1.11.6"
					],
					"Layer": {}
				},
				{
					"ID": "modernc.org/ccorpus@v1.11.6",
					"Name": "modernc.org/ccorpus",
					"Version": "1.11.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "modernc.org/golex@v1.0.0",
					"Name": "modernc.org/golex",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "modernc.org/httpfs@v1.0.6",
					"Name": "modernc.org/httpfs",
					"Version": "1.0.6",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "modernc.org/libc@v1.22.2",
					"Name": "modernc.org/libc",
					"Version": "1.22.2",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/mattn/go-isatty@v0.0.17",
						"modernc.org/mathutil@v1.5.0",
						"github.com/google/uuid@v1.3.0",
						"modernc.org/memory@v1.5.0",
						"github.com/dustin/go-humanize@v1.0.1",
						"golang.org/x/sys@v0.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "modernc.org/mathutil@v1.5.0",
					"Name": "modernc.org/mathutil",
					"Version": "1.5.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/remyoudompheng/bigfft@v0.0.0-20230126093431-47fa9a501578"
					],
					"Layer": {}
				},
				{
					"ID": "modernc.org/memory@v1.5.0",
					"Name": "modernc.org/memory",
					"Version": "1.5.0",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"modernc.org/mathutil@v1.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "modernc.org/opt@v0.1.3",
					"Name": "modernc.org/opt",
					"Version": "0.1.3",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "modernc.org/sqlite@v1.20.3",
					"Name": "modernc.org/sqlite",
					"Version": "1.20.3",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"modernc.org/ccgo/v3@v3.16.13",
						"github.com/mattn/go-sqlite3@v2.0.3+incompatible",
						"github.com/google/pprof@v0.0.0-20221118152302-e6195bd50e26",
						"modernc.org/libc@v1.22.2",
						"modernc.org/tcl@v1.15.0",
						"golang.org/x/sys@v0.5.0",
						"modernc.org/mathutil@v1.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "modernc.org/strutil@v1.1.3",
					"Name": "modernc.org/strutil",
					"Version": "1.1.3",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"DependsOn": [
						"modernc.org/mathutil@v1.5.0"
					],
					"Layer": {}
				},
				{
					"ID": "modernc.org/tcl@v1.15.0",
					"Name": "modernc.org/tcl",
					"Version": "1.15.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "modernc.org/token@v1.0.1",
					"Name": "modernc.org/token",
					"Version": "1.0.1",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "modernc.org/xc@v1.0.0",
					"Name": "modernc.org/xc",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "modernc.org/z@v1.7.0",
					"Name": "modernc.org/z",
					"Version": "1.7.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "mvdan.cc/gofumpt@v0.1.1",
					"Name": "mvdan.cc/gofumpt",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "mvdan.cc/interfacer@v0.0.0-20180901003855-c20040233aed",
					"Name": "mvdan.cc/interfacer",
					"Version": "0.0.0-20180901003855-c20040233aed",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "mvdan.cc/lint@v0.0.0-20170908181259-adc824a0674b",
					"Name": "mvdan.cc/lint",
					"Version": "0.0.0-20170908181259-adc824a0674b",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "mvdan.cc/unparam@v0.0.0-20211214103731-d0ef000c54e5",
					"Name": "mvdan.cc/unparam",
					"Version": "0.0.0-20211214103731-d0ef000c54e5",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "nhooyr.io/websocket@v1.8.7",
					"Name": "nhooyr.io/websocket",
					"Version": "1.8.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "oras.land/oras-go@v1.2.2",
					"Name": "oras.land/oras-go",
					"Version": "1.2.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "pack.ag/amqp@v0.11.2",
					"Name": "pack.ag/amqp",
					"Version": "0.11.2",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "rsc.io/binaryregexp@v0.2.0",
					"Name": "rsc.io/binaryregexp",
					"Version": "0.2.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "rsc.io/pdf@v0.1.1",
					"Name": "rsc.io/pdf",
					"Version": "0.1.1",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "rsc.io/quote/v3@v3.1.0",
					"Name": "rsc.io/quote/v3",
					"Version": "3.1.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "rsc.io/sampler@v1.3.0",
					"Name": "rsc.io/sampler",
					"Version": "1.3.0",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "sigs.k8s.io/apiserver-network-proxy/konnectivity-client@v0.0.33",
					"Name": "sigs.k8s.io/apiserver-network-proxy/konnectivity-client",
					"Version": "0.0.33",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "sigs.k8s.io/json@v0.0.0-20220713155537-f223a00ba0e2",
					"Name": "sigs.k8s.io/json",
					"Version": "0.0.0-20220713155537-f223a00ba0e2",
					"Licenses": [
						"Apache-2.0",
						"BSD-3-Clause"
					],
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "sigs.k8s.io/kustomize/api@v0.12.1",
					"Name": "sigs.k8s.io/kustomize/api",
					"Version": "0.12.1",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"sigs.k8s.io/kustomize/kyaml@v0.13.9",
						"k8s.io/kube-openapi@v0.0.0-20221012153701-172d655c2280",
						"github.com/imdario/mergo@v0.3.13",
						"sigs.k8s.io/yaml@v1.3.0",
						"github.com/pkg/errors@v0.9.1",
						"github.com/go-errors/errors@v1.0.1",
						"github.com/stretchr/testify@v1.8.1",
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/evanphx/json-patch@v5.6.0+incompatible",
						"github.com/google/shlex@v0.0.0-20191202100458-e7afc7fbc510"
					],
					"Layer": {}
				},
				{
					"ID": "sigs.k8s.io/kustomize/cmd/config@v0.10.9",
					"Name": "sigs.k8s.io/kustomize/cmd/config",
					"Version": "0.10.9",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "sigs.k8s.io/kustomize/kustomize/v4@v4.5.7",
					"Name": "sigs.k8s.io/kustomize/kustomize/v4",
					"Version": "4.5.7",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "sigs.k8s.io/kustomize/kyaml@v0.13.9",
					"Name": "sigs.k8s.io/kustomize/kyaml",
					"Version": "0.13.9",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/google/go-cmp@v0.5.9",
						"github.com/pkg/errors@v0.9.1",
						"golang.org/x/sys@v0.5.0",
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/monochromegane/go-gitignore@v0.0.0-20200626010858-205db1a8cc00",
						"github.com/go-errors/errors@v1.0.1",
						"github.com/stretchr/testify@v1.8.1",
						"k8s.io/kube-openapi@v0.0.0-20221012153701-172d655c2280",
						"github.com/davecgh/go-spew@v1.1.1",
						"github.com/sergi/go-diff@v1.2.0",
						"go.starlark.net@v0.0.0-20200306205701-8dd3e2ee1dd5",
						"github.com/xlab/treeprint@v1.1.0",
						"gopkg.in/check.v1@v1.0.0-20201130134442-10cb98267c6c",
						"github.com/google/gnostic@v0.5.7-v3refs",
						"github.com/spf13/cobra@v1.6.1",
						"google.golang.org/protobuf@v1.28.1",
						"sigs.k8s.io/yaml@v1.3.0"
					],
					"Layer": {}
				},
				{
					"ID": "sigs.k8s.io/release-utils@v0.7.3",
					"Name": "sigs.k8s.io/release-utils",
					"Version": "0.7.3",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "sigs.k8s.io/structured-merge-diff@v1.0.1-0.20191108220359-b1b620dd3f06",
					"Name": "sigs.k8s.io/structured-merge-diff",
					"Version": "1.0.1-0.20191108220359-b1b620dd3f06",
					"Indirect": true,
					"Layer": {}
				},
				{
					"ID": "sigs.k8s.io/structured-merge-diff/v4@v4.2.3",
					"Name": "sigs.k8s.io/structured-merge-diff/v4",
					"Version": "4.2.3",
					"Licenses": [
						"Apache-2.0"
					],
					"Indirect": true,
					"DependsOn": [
						"gopkg.in/yaml.v2@v2.4.0",
						"github.com/google/gofuzz@v1.2.0",
						"github.com/json-iterator/go@v1.1.12"
					],
					"Layer": {}
				},
				{
					"ID": "sigs.k8s.io/yaml@v1.3.0",
					"Name": "sigs.k8s.io/yaml",
					"Version": "1.3.0",
					"Licenses": [
						"BSD-3-Clause",
						"MIT"
					],
					"Indirect": true,
					"DependsOn": [
						"github.com/davecgh/go-spew@v1.1.1",
						"gopkg.in/yaml.v2@v2.4.0"
					],
					"Layer": {}
				},
				{
					"ID": "sourcegraph.com/sqs/pbtypes@v1.0.0",
					"Name": "sourcegraph.com/sqs/pbtypes",
					"Version": "1.0.0",
					"Indirect": true,
					"Layer": {}
				}
			],
			"Vulnerabilities": [
				{
					"VulnerabilityID": "CVE-2019-0205",
					"PkgID": "github.com/apache/thrift@v0.12.0",
					"PkgName": "github.com/apache/thrift",
					"InstalledVersion": "0.12.0",
					"FixedVersion": "0.13.0",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2019-0205",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "thrift: Endless loop when feed with specific input data",
					"Description": "In Apache Thrift all versions up to and including 0.12.0, a server or client may run into an endless loop when feed with specific input data. Because the issue had already been partially fixed in version 0.11.0, depending on the installed version it affects only certain language bindings.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-835"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:N/I:N/A:C",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V2Score": 7.8,
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 5.9
						}
					},
					"References": [
						"http://mail-archives.apache.org/mod_mbox/thrift-dev/201910.mbox/%3CVI1PR0101MB2142E0EA19F582429C3AEBCBB1920%40VI1PR0101MB2142.eurprd01.prod.exchangelabs.com%3E",
						"https://access.redhat.com/errata/RHSA-2020:0804",
						"https://access.redhat.com/errata/RHSA-2020:0805",
						"https://access.redhat.com/errata/RHSA-2020:0806",
						"https://access.redhat.com/errata/RHSA-2020:0811",
						"https://access.redhat.com/security/cve/CVE-2019-0205",
						"https://github.com/advisories/GHSA-rj7p-rfgp-852x",
						"https://lists.apache.org/thread.html/003ac686189e6ce7b99267784d04bf60059a8c323eeda5a79a0309b8@%3Ccommits.cassandra.apache.org%3E",
						"https://lists.apache.org/thread.html/07bd68ad237a5d513751d6d2731a8828f902c738ea57d85c1a72bad3@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/0d058e1bfd11727c4f2e2adf4b6e403a47c38e22431ab20066a1ac79@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/1193444c17f499f92cd198d464a2c1ffc92182c83487345a854914b3@%3Cuser.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/1c18ec6ebfea0a9211992be952e8b33d0fda202c077979b84a5e09a8@%3Cuser.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/3dfa054b89274c9109c26ed1843ca15a14c03786f4016d26773878ae@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/928cae83d20d8d8196c26118f7084aa37573e1d31162381fb9454fb5@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/9f7150d0b02e72d1154721a412e80cf797f1b7cfa295fcefc67b1381@%3Ccommits.cassandra.apache.org%3E",
						"https://lists.apache.org/thread.html/a9669756befaeb0f8e08766d3f4d410a0fce85da3a570506f71f0b67@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r0c606d4be9aa163d132edf8edd8eb55e7b9464063b99acbbf6e9e287@%3Cissues.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/r0d08f5576286f4a042aabde13ecf58979644f6dc210f25aa9a4d469b@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r137753c9df8dd9065bea27a26af49aadc406b5a57fc584fefa008afd@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r1b1a92c229ead94d53b3bcde9e624d002b54f1c6fdb830b9f4da20e1@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r228ac842260c2c516af7b09f3cf4cf76e5b9c002e359954a203ab5a5@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r2832722c31d78bef7526e2c701ba4b046736e4c851473194a247392f@%3Ccommits.pulsar.apache.org%3E",
						"https://lists.apache.org/thread.html/r36581cc7047f007dd6aadbdd34e18545ec2c1eb7ccdae6dd47a877a9@%3Ccommits.pulsar.apache.org%3E",
						"https://lists.apache.org/thread.html/r3887b48b183b6fa43e59398bd170a99239c0a16264cb5175b5b689d0@%3Ccommits.cassandra.apache.org%3E",
						"https://lists.apache.org/thread.html/r4633082b834eebccd0d322697651d931ab10ca9c51ee7ef18e1f60f4@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r4d3f1d3e333d9c2b2f6e6ae8ed8750d4de03410ac294bcd12c7eefa3@%3Ccommits.cassandra.apache.org%3E",
						"https://lists.apache.org/thread.html/r50bf84c60867574238d18cdad5da9f303b618114c35566a3a001ae08@%3Cdev.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/r53c03e1c979b9c628d0d65e0f49dd9a9f9d7572838727ad11b750575@%3Cuser.cassandra.apache.org%3E",
						"https://lists.apache.org/thread.html/r55609613abab203a1f2c1f3de050b63ae8f5c4a024df0d848d6915ff@%3Ccommits.pulsar.apache.org%3E",
						"https://lists.apache.org/thread.html/r569b2b3da41ff45bfacfca6787a4a8728edd556e185b69b140181d9d@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r573029c2f8632e3174b9eea7cd57f9c9df33f2f706450e23fc57750a@%3Ccommits.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r67a704213d13326771f46c84bbd84c8281bb93946e155e0e40abcb4c@%3Ccommits.cassandra.apache.org%3E",
						"https://lists.apache.org/thread.html/r73a3c8b80765e3d2430ff51f22b778d0c917919f01815b69ed16cf9d@%3Cissues.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/r7859e767c90c8f4971dec50f801372aa64e88f143c3e8a265a36f9b4@%3Cuser.cassandra.apache.org%3E",
						"https://lists.apache.org/thread.html/r92b7771afee2625209c36727fefdc77033964e9a1daa81ec3327e625@%3Cuser.cassandra.apache.org%3E",
						"https://lists.apache.org/thread.html/r934f312dd5add7276ac2de684d8b237554ff9f34479a812df5fd6aee@%3Ccommits.cassandra.apache.org%3E",
						"https://lists.apache.org/thread.html/rab740e5c70424ef79fd095a4b076e752109aeee41c4256c2e5e5e142@%3Ccommits.pulsar.apache.org%3E",
						"https://lists.apache.org/thread.html/rb139fa1d2714822d8c6e6f3bd6f5d5c91844d313201185c409288fd9@%3Ccommits.cassandra.apache.org%3E",
						"https://lists.apache.org/thread.html/rba61c1f3a3b1960a6a694775b1a437751eba0825f30188f69387fe90@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/rce0d368a78b42c545f26c2e6e91e2b8a91b27b60d0cb45fe1911d337@%3Cnotifications.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/re387dc6ca11cb0b0ce4de8e800bb91ca50fee054b80105f5cd34adcb@%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/rf359e5cc6a185494fc0cfe837fe82f7db2ef49242d35cbf3895aebce@%3Cdev.thrift.apache.org%3E",
						"https://nvd.nist.gov/vuln/detail/CVE-2019-0205",
						"https://security.gentoo.org/glsa/202107-32",
						"https://www.oracle.com//security-alerts/cpujul2021.html"
					],
					"PublishedDate": "2019-10-29T19:15:00Z",
					"LastModifiedDate": "2022-04-18T15:45:00Z"
				},
				{
					"VulnerabilityID": "CVE-2019-0210",
					"PkgID": "github.com/apache/thrift@v0.12.0",
					"PkgName": "github.com/apache/thrift",
					"InstalledVersion": "0.12.0",
					"FixedVersion": "0.13.0",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2019-0210",
					"DataSource": {
						"ID": "go-vulndb",
						"Name": "The Go Vulnerability Database",
						"URL": "https://github.com/golang/vulndb"
					},
					"Title": "thrift: Out-of-bounds read related to TJSONProtocol or TSimpleJSONProtocol",
					"Description": "In Apache Thrift 0.9.3 to 0.12.0, a server implemented in Go using TJSONProtocol or TSimpleJSONProtocol may panic when feed with invalid input data.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-125"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:N/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V2Score": 5,
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						}
					},
					"References": [
						"http://mail-archives.apache.org/mod_mbox/thrift-dev/201910.mbox/%3C277A46CA87494176B1BBCF5D72624A2A%40HAGGIS%3E",
						"https://access.redhat.com/errata/RHSA-2020:0804",
						"https://access.redhat.com/errata/RHSA-2020:0805",
						"https://access.redhat.com/errata/RHSA-2020:0806",
						"https://access.redhat.com/errata/RHSA-2020:0811",
						"https://access.redhat.com/security/cve/CVE-2019-0210",
						"https://github.com/advisories/GHSA-jq7p-26h5-w78r",
						"https://github.com/apache/thrift/blob/master/CHANGES.md#0130",
						"https://github.com/apache/thrift/commit/264a3f318ed3e9e51573f67f963c8509786bcec2",
						"https://lists.apache.org/thread.html/r2832722c31d78bef7526e2c701ba4b046736e4c851473194a247392f@%3Ccommits.pulsar.apache.org%3E",
						"https://lists.apache.org/thread.html/r36581cc7047f007dd6aadbdd34e18545ec2c1eb7ccdae6dd47a877a9@%3Ccommits.pulsar.apache.org%3E",
						"https://lists.apache.org/thread.html/r55609613abab203a1f2c1f3de050b63ae8f5c4a024df0d848d6915ff@%3Ccommits.pulsar.apache.org%3E",
						"https://lists.apache.org/thread.html/rab740e5c70424ef79fd095a4b076e752109aeee41c4256c2e5e5e142@%3Ccommits.pulsar.apache.org%3E",
						"https://nvd.nist.gov/vuln/detail/CVE-2019-0210",
						"https://pkg.go.dev/vuln/GO-2021-0101",
						"https://security.gentoo.org/glsa/202107-32",
						"https://www.oracle.com//security-alerts/cpujul2021.html"
					],
					"PublishedDate": "2019-10-29T19:15:00Z",
					"LastModifiedDate": "2022-10-29T02:33:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-13949",
					"PkgID": "github.com/apache/thrift@v0.12.0",
					"PkgName": "github.com/apache/thrift",
					"InstalledVersion": "0.12.0",
					"FixedVersion": "v0.14.0",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-13949",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "libthrift: potential DoS when processing untrusted payloads",
					"Description": "In Apache Thrift 0.9.3 to 0.13.0, malicious RPC clients could send short messages which would result in a large memory allocation, potentially leading to denial of service.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-400"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:N/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V2Score": 5,
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-13949",
						"https://github.com/advisories/GHSA-g2fg-mr77-6vrm",
						"https://github.com/apache/hbase/pull/2958",
						"https://lists.apache.org/thread.html/r01b34416677f1ba869525e1b891ac66fa6f88c024ee4d7cdea6b456b@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r02ba8db500d15a5949e9a7742815438002ba1cf1b361bdda52ed40ca@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r02f7771863383ae993eb83cdfb70c3cb65a355c913242c850f61f1b8@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r0372f0af2dad0b76fbd7a6cfdaad29d50384ad48dda475a5026ff9a3@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r08a7bd19470ef8950d58cc9d9e7b02bc69c43f56c601989a7729cce5@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r1084a911dff90b2733b442ee0f5929d19b168035d447f2d25f534fe4@%3Cissues.solr.apache.org%3E",
						"https://lists.apache.org/thread.html/r117d5d2b08d505b69558a2a31b0a1cf8990cd0385060b147e70e76a9@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r12090c81b67d21a814de6cf54428934a5e5613fde222759bbb05e99b@%3Cissues.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/r13f40151513ff095a44a86556c65597a7e55c00f5e19764a05530266@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r143ca388b0c83fe659db14be76889d50b453b0ee06f423181f736933@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r1456eab5f3768be69436d5b0a68b483eb316eb85eb3ef6eba156a302@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r1504886a550426d3c05772c47b1a6350c3235e51fd1fdffbec43e974@%3Cuser.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r15eed5d21e16a5cce810c1e096ffcffc36cd08c2f78ce2f9b24b4a6a@%3Cissues.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/r179119bbfb5610499286a84c316f6789c5afbfa5340edec6eb28d027@%3Ccommits.druid.apache.org%3E",
						"https://lists.apache.org/thread.html/r17cca685ad53bc8300ee7fcfe874cb784a222343f217dd076e7dc1b6@%3Ccommits.camel.apache.org%3E",
						"https://lists.apache.org/thread.html/r18732bb1343894143d68db58fe4c8f56d9cd221b37f1378ed7373372@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r191a9279e2863b68e5496ee4ecd8be0d4fe43b324b934f0d1f106e1d@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r196409cc4df929d540a2e66169104f2b3b258d8bd96b5f083c59ee51@%3Ccommits.camel.apache.org%3E",
						"https://lists.apache.org/thread.html/r1d4a247329a8478073163567bbc8c8cb6b49c6bfc2bf58153a857af1@%3Ccommits.druid.apache.org%3E",
						"https://lists.apache.org/thread.html/r1dea91f0562e0a960b45b1c5635b2a47b258b77171334276bcf260a7@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r1fb2d26b81c64ce96c4fd42b9e6842ff315b02c36518213b6c057350@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r20f6f8f8cf07986dc5304baed3bf4d8a1c4cf135ff6fe3640be4d7ec@%3Cissues.solr.apache.org%3E",
						"https://lists.apache.org/thread.html/r278e96edc4bc13efb2cb1620a73e48f569162b833c6bda3e6ea18b80@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r27b7d3d95ffa8498899ef1c9de553d469f8fe857640a3f6e58dba640@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r286e9a13d3ab0550042997219101cb87871834b8d5ec293b0c60f009@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r298a25228868ebc0943d56c8f3641212a0962d2dbcf1507d5860038e@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r2d180180f37c2ab5cebd711d080d01d8452efa8ad43c5d9cd7064621@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r2ed66a3823990306b742b281af1834b9bc85f98259c870b8ffb13d93@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r2f6a547f226579f542eb08793631d1f2d47d7aed7e2f9d11a4e6af9f@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r3550b61639688e0efbc253c6c3e6358851c1f053109f1c149330b535@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r36581cc7047f007dd6aadbdd34e18545ec2c1eb7ccdae6dd47a877a9@%3Ccommits.pulsar.apache.org%3E",
						"https://lists.apache.org/thread.html/r3a1291a7ab8ee43db87cb0253371489810877028fc6e7c68dc640926@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r3de0e0c26d4bd00dd28cab27fb44fba11d1c1d20275f7cce71393dd1@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r3e31ec7e8c39db7553be4f4fd4d27cf27c41f1ba9c985995c4ea9c5a@%3Cnotifications.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r3f3e1d562c528b4bafef2dde51f79dd444a4b68ef24920d68068b6f9@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r3f97dbbbb1b2a7324521208bb595392853714e141a37b8f68d395835@%3Cnotifications.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r409e296c890753296c544a74d4de0d4a3ce719207a5878262fa2bd71@%3Ccommits.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r421a9a76811c1aed7637b5fe5376ab14c09ccdd7b70d5211d6e76d1e@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r43dc2b2e928e9d845b07ac075634cb759d91bb852421dc282f87a74a%40%3Cdev.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r449288f6a941a2585262e0f4454fdefe169d5faee33314f6f89fab30@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r4d90b6d8de9697beb38814596d3a0d4994fa9aba1f6731a2c648d3ae@%3Cissues.solr.apache.org%3E",
						"https://lists.apache.org/thread.html/r4fa53eacca2ac38904f38dc226caebb3f2f668b2da887f2fd416f4a7@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r515e01a30443cfa2dbb355c44c63149869afd684fb7b0344c58fa67b@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r533a172534ae67f6f17c4d33a1b814d3d5ada9ccd4eb442249f33fa2@%3Ccommits.camel.apache.org%3E",
						"https://lists.apache.org/thread.html/r587b4a5bcbc290269df0906bafba074f3fe4e50d4e959212f56fa7ea@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r62aa6d07b23095d980f348d330ed766560f9a9e940fec051f534ce37@%3Cissues.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/r635133a74fa07ef3331cae49a9a088365922266edd58099a6162a5d3@%3Cissues.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/r668aed02e287c93403e0b8df16089011ee4a96afc8f479809f1fc07f@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r6990c849aeafe65366794bfd002febd47b7ffa8cf3c059b400bbb11d@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r699c031e6921b0ad0f943848e7ba1d0e88c953619d47908618998f76@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r6ae3c68b0bfe430fb32f24236475276b6302bed625b23f53b68748b5@%3Cuser.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r6ba4f0817f98bf7c1cb314301cb7a24ba11a0b3e7a5be8b0ae3190b0@%3Cissues.solr.apache.org%3E",
						"https://lists.apache.org/thread.html/r6c5b7324274fd361b038c5cc316e99344b7ae20beae7163214fac14d@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r72c3d1582d50b2ca7dd1ee97e81c847a5cf3458be26d42653c39d7a6@%3Ccommits.camel.apache.org%3E",
						"https://lists.apache.org/thread.html/r741364444c3b238ab4a161f67f0d3a8f68acc517a39e6a93aa85d753@%3Cissues.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/r74eb88b422421c65514c23cb9c2b2216efb9254317ea1b6a264fe6dc@%3Ccommits.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r7597683cc8b87a31ec864835225a543dad112d7841bf1f17bf7eb8db@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r7ae909438ff5a2ffed9211e6ab0bd926396fd0b1fc33f31a406ee704@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r812915ecfa541ad2ca65c68a97b2c014dc87141dfaefc4de85049681@%3Ccommits.camel.apache.org%3E",
						"https://lists.apache.org/thread.html/r850522c56c05aa06391546bdb530bb8fc3437f2b77d16e571ae73309@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r869331422580d35b4e65bd74cf3090298c4651bf4f31bfb19ae769da@%3Cissues.solr.apache.org%3E",
						"https://lists.apache.org/thread.html/r886b6d9a89b6fa0aafbf0a8f8f14351548d6c6f027886a3646dbd075@%3Cissues.solr.apache.org%3E",
						"https://lists.apache.org/thread.html/r8897a41f50d4eb19b268bde99328e943ba586f77779efa6de720c39f@%3Ccommits.druid.apache.org%3E",
						"https://lists.apache.org/thread.html/r890b8ec5203d70a59a6b1289420d46938d9029ed706aa724978789be@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r89fdd39965efb7c6d22bc21c286d203252cea476e1782724aca0748e@%3Cuser.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r8dfbefcd606af6737b62461a45a9af9222040b62eab474ff2287cf75@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r90b4473950e26607ed77f3d70f120166f6a36a3f80888e4eeabcaf91@%3Cissues.solr.apache.org%3E",
						"https://lists.apache.org/thread.html/r93f23f74315e009f4fb68ef7fc794dceee42cf87fe6613814dcd8c70@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r950ced188d62320fdb84d9e2c6ba896328194952eff7430c4f55e4b0@%3Cissues.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/r995b945cc8f6ec976d8c52d42ba931a688b45fb32cbdde715b6a816a@%3Cuser.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/r9b51e7c253cb0989b4c03ed9f4e5f0478e427473357209ccc4d08ebf@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/r9ec75f690dd60fec8621ba992290962705d5b7f0d8fd0a42fab0ac9f@%3Cissues.solr.apache.org%3E",
						"https://lists.apache.org/thread.html/ra3f7f06a1759c8e2985ed24ae2f5483393c744c1956d661adc873f2c@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/ra7371efd8363c1cd0f5331aafd359a808cf7277472b8616d7b392128@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/ra9f7c755790313e1adb95d29794043fb102029e803daf4212ae18063@%3Cissues.solr.apache.org%3E",
						"https://lists.apache.org/thread.html/race178e9500ab8a5a6112667d27c48559150cadb60f2814bc67c40af@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rad635e16b300cf434280001ee6ecd2ed2c70987bf16eb862bfa86e02@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rada9d2244a66ede0be29afc5d5f178a209f9988db56b9b845d955741@%3Ccommits.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rae95c2234b6644bfd666b2671a1b42a09f38514d0f27cca3c7d5d55a@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/raea1bb8cf2eb39c5e10543f547bdbbdbb563c2ac6377652f161d4e37@%3Ccommits.druid.apache.org%3E",
						"https://lists.apache.org/thread.html/rb3574bc1036b577b265be510e6b208f0a5d5d84cd7198347dc8482df@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rb44ec04e5a9b1f87fef97bb5f054010cbfaa3b8586472a3a38a16fca@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rb51977d392b01434b0b5df5c19b9ad5b6178cfea59e676c14f24c053@%3Cissues.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/rb91c32194eb5006f0b0c8bcdbd512c13495a1b277d4d51d45687f036@%3Cissues.solr.apache.org%3E",
						"https://lists.apache.org/thread.html/rbc5cad06a46d23253a3c819229efedecfc05f89ef53f5fdde77a86d6@%3Cuser.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/rbfbb81e7fb5d5009caf25798f02f42a7bd064a316097303ba2f9ed76@%3Ccommits.druid.apache.org%3E",
						"https://lists.apache.org/thread.html/rc48ab5455bdece9a4afab53ca0f1e4f742d5baacb241323454a87b4e@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rc7a241e0af086b226ff9ccabc4a243d206f0f887037994bfd8fcaaeb@%3Ccommits.druid.apache.org%3E",
						"https://lists.apache.org/thread.html/rc7a79b08822337c68705f16ee7ddcfd352313b836e78a4b86c7a7e3d@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rc896ce7761999b088f3adabcb99dde2102b6a66130b8eec6c8265eab@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rcace846f74ea9e2af2f7c30cef0796724aa74089f109c8029b850163@%3Cdev.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/rcae4c66f67e701db44d742156dee1f3e5e4e07ad7ce10c740a76b669@%3Cissues.hive.apache.org%3E",
						"https://lists.apache.org/thread.html/rcdf62ecd36e39e4ff9c61802eee4927ce9ecff1602eed1493977ef4c@%3Cuser.thrift.apache.org%3E",
						"https://lists.apache.org/thread.html/rd0734d91f16d5b050f0bcff78b4719300042a34fadf5e52d0edf898e@%3Cissues.solr.apache.org%3E",
						"https://lists.apache.org/thread.html/rd370fdb419652c5219409b315a6349b07a7e479bd3f151e9a5671774@%3Ccommits.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rd49d53b146d94a7d3a135f6b505589655ffec24ea470e345d31351bb@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rd78cdd87d84499a404202f015f55935db3658bd0983ecec81e6b18c6@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rdc8e0f92d06decaee5db58de4ded16d80016a7db2240a8db17225c49@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rdcf00186c34d69826d9c6b1f010136c98b00a586136de0061f7d267e@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rf568168e7f83871969928c0379813da6d034485f8b20fa73884816d6@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rf603d25213cfff81d6727c259328846b366fd32a43107637527c9768@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rf65df763f630163a3f620887efec082080555cee1adb0b8eaf2c7ddb@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rf741d08c7e0ab1542c81ea718467422bd01159ed284796a36ad88311@%3Cissues.hbase.apache.org%3E",
						"https://lists.apache.org/thread.html/rf75979ae0ffd526f3afa935a8f0ee13c82808ea8b2bc0325eb9dcd90@%3Ccommits.camel.apache.org%3E",
						"https://lists.apache.org/thread.html/rfbb01bb85cdc2022f3b96bdc416dbfcb49a2855b3a340aa88b2e1de9@%3Ccommits.druid.apache.org%3E",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-13949",
						"https://security.gentoo.org/glsa/202107-32",
						"https://www.oracle.com//security-alerts/cpujul2021.html",
						"https://www.oracle.com/security-alerts/cpujan2022.html"
					],
					"PublishedDate": "2021-02-12T20:15:00Z",
					"LastModifiedDate": "2022-04-04T13:32:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8911",
					"PkgID": "github.com/aws/aws-sdk-go@v1.44.210",
					"PkgName": "github.com/aws/aws-sdk-go",
					"InstalledVersion": "1.44.210",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8911",
					"DataSource": {
						"ID": "go-vulndb",
						"Name": "The Go Vulnerability Database",
						"URL": "https://github.com/golang/vulndb"
					},
					"Title": "aws/aws-sdk-go: CBC padding oracle issue in AWS S3 Crypto SDK for golang",
					"Description": "A padding oracle vulnerability exists in the AWS S3 Crypto SDK for GoLang versions prior to V2. The SDK allows users to encrypt files with AES-CBC without computing a Message Authentication Code (MAC), which then allows an attacker who has write access to the target's S3 bucket and can observe whether or not an endpoint with access to the key can decrypt a file, they can reconstruct the plaintext with (on average) 128*length (plaintext) queries to the endpoint, by exploiting CBC's ability to manipulate the bytes of the next block and PKCS5 padding errors. It is recommended to update your SDK to V2 or later, and re-encrypt your files.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-327"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:C/C:H/I:N/A:N",
							"V3Score": 5.6
						},
						"nvd": {
							"V2Vector": "AV:L/AC:L/Au:N/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:C/C:H/I:N/A:N",
							"V2Score": 2.1,
							"V3Score": 5.6
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:C/C:H/I:N/A:N",
							"V3Score": 5.6
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8911",
						"https://aws.amazon.com/blogs/developer/updates-to-the-amazon-s3-encryption-client/?s=09",
						"https://bugzilla.redhat.com/show_bug.cgi?id=1869800",
						"https://github.com/advisories/GHSA-f5pg-7wfw-84q9",
						"https://github.com/aws/aws-sdk-go/commit/1e84382fa1c0086362b5a4b68e068d4f8518d40e",
						"https://github.com/aws/aws-sdk-go/commit/ae9b9fd92af132cfd8d879809d8611825ba135f4",
						"https://github.com/aws/aws-sdk-go/pull/3403",
						"https://github.com/google/security-research/security/advisories/GHSA-f5pg-7wfw-84q9",
						"https://github.com/sophieschmieg/exploits/tree/master/aws_s3_crypto_poc",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8911",
						"https://pkg.go.dev/vuln/GO-2022-0646"
					],
					"PublishedDate": "2020-08-11T20:15:00Z",
					"LastModifiedDate": "2020-08-18T13:37:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8912",
					"PkgID": "github.com/aws/aws-sdk-go@v1.44.210",
					"PkgName": "github.com/aws/aws-sdk-go",
					"InstalledVersion": "1.44.210",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8912",
					"DataSource": {
						"ID": "go-vulndb",
						"Name": "The Go Vulnerability Database",
						"URL": "https://github.com/golang/vulndb"
					},
					"Title": "aws-sdk-go: In-band key negotiation issue in AWS S3 Crypto SDK for golang",
					"Description": "A vulnerability in the in-band key negotiation exists in the AWS S3 Crypto SDK for GoLang versions prior to V2. An attacker with write access to the targeted bucket can change the encryption algorithm of an object in the bucket, which can then allow them to change AES-GCM to AES-CTR. Using this in combination with a decryption oracle can reveal the authentication key used by AES-GCM as decrypting the GMAC tag leaves the authentication key recoverable as an algebraic equation. It is recommended to update your SDK to V2 or later, and re-encrypt your files.",
					"Severity": "LOW",
					"CweIDs": [
						"CWE-327"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:N",
							"V3Score": 2.5
						},
						"nvd": {
							"V2Vector": "AV:L/AC:L/Au:N/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:N",
							"V2Score": 2.1,
							"V3Score": 2.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:N",
							"V3Score": 2.5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8912",
						"https://aws.amazon.com/blogs/developer/updates-to-the-amazon-s3-encryption-client/?s=09",
						"https://bugzilla.redhat.com/show_bug.cgi?id=1869801",
						"https://github.com/advisories/GHSA-7f33-f4f5-xwgw",
						"https://github.com/aws/aws-sdk-go/commit/1e84382fa1c0086362b5a4b68e068d4f8518d40e",
						"https://github.com/aws/aws-sdk-go/commit/ae9b9fd92af132cfd8d879809d8611825ba135f4",
						"https://github.com/aws/aws-sdk-go/pull/3403",
						"https://github.com/google/security-research/security/advisories/GHSA-7f33-f4f5-xwgw",
						"https://github.com/sophieschmieg/exploits/tree/master/aws_s3_crypto_poc",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8912",
						"https://pkg.go.dev/vuln/GO-2022-0646"
					],
					"PublishedDate": "2020-08-11T20:15:00Z",
					"LastModifiedDate": "2020-08-17T19:31:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-39394",
					"PkgID": "github.com/bytecodealliance/wasmtime-go@v1.0.0",
					"PkgName": "github.com/bytecodealliance/wasmtime-go",
					"InstalledVersion": "1.0.0",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-39394",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "Out-of-bounds Write",
					"Description": "Wasmtime is a standalone runtime for WebAssembly. Prior to version 2.0.2, there is a bug in Wasmtime's C API implementation where the definition of the `wasmtime_trap_code` does not match its declared signature in the `wasmtime/trap.h` header file. This discrepancy causes the function implementation to perform a 4-byte write into a 1-byte buffer provided by the caller. This can lead to three zero bytes being written beyond the 1-byte location provided by the caller. This bug has been patched and users should upgrade to Wasmtime 2.0.2. This bug can be worked around by providing a 4-byte buffer casted to a 1-byte buffer when calling `wasmtime_trap_code`. Users of the `wasmtime` crate are not affected by this issue, only users of the C API function `wasmtime_trap_code` are affected.",
					"Severity": "CRITICAL",
					"CweIDs": [
						"CWE-787"
					],
					"CVSS": {
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 9.8
						}
					},
					"References": [
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-39394",
						"https://github.com/bytecodealliance/wasmtime/commit/087d9d7becf7422b3f872a3bcd5d97bb7ce7ff36",
						"https://github.com/bytecodealliance/wasmtime/security/advisories/GHSA-h84q-m8rr-3v9q",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-39394"
					],
					"PublishedDate": "2022-11-10T20:15:00Z",
					"LastModifiedDate": "2022-11-16T13:31:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-39392",
					"PkgID": "github.com/bytecodealliance/wasmtime-go@v1.0.0",
					"PkgName": "github.com/bytecodealliance/wasmtime-go",
					"InstalledVersion": "1.0.0",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-39392",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "Wasmtime out of bounds read/write with zero-memory-pages configuration",
					"Description": "Wasmtime is a standalone runtime for WebAssembly. Prior to version 2.0.2, there is a bug in Wasmtime's implementation of its pooling instance allocator when the allocator is configured to give WebAssembly instances a maximum of zero pages of memory. In this configuration, the virtual memory mapping for WebAssembly memories did not meet the compiler-required configuration requirements for safely executing WebAssembly modules. Wasmtime's default settings require virtual memory page faults to indicate that wasm reads/writes are out-of-bounds, but the pooling allocator's configuration would not create an appropriate virtual memory mapping for this meaning out of bounds reads/writes can successfully read/write memory unrelated to the wasm sandbox within range of the base address of the memory mapping created by the pooling allocator. This bug is not applicable with the default settings of the `wasmtime` crate. This bug can only be triggered by setting `InstanceLimits::memory_pages` to zero. This is expected to be a very rare configuration since this means that wasm modules cannot allocate any pages of linear memory. All wasm modules produced by all current toolchains are highly likely to use linear memory, so it's expected to be unlikely that this configuration is set to zero by any production embedding of Wasmtime. This bug has been patched and users should upgrade to Wasmtime 2.0.2. This bug can be worked around by increasing the `memory_pages` allotment when configuring the pooling allocator to a value greater than zero. If an embedding wishes to still prevent memory from actually being used then the `Store::limiter` method can be used to dynamically disallow growth of memory beyond 0 bytes large. Note that the default `memory_pages` value is greater than zero.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-787"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:N",
							"V3Score": 5.9
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",
							"V3Score": 7.4
						}
					},
					"References": [
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-39392",
						"https://github.com/advisories/GHSA-44mr-8vmm-wjhg",
						"https://github.com/bytecodealliance/wasmtime/commit/e60c3742904ccbb3e26da201c9221c38a4981d72",
						"https://github.com/bytecodealliance/wasmtime/security/advisories/GHSA-44mr-8vmm-wjhg",
						"https://groups.google.com/a/bytecodealliance.org/g/sec-announce/c/c1HBDDJwNPA",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-39392",
						"https://rustsec.org/advisories/RUSTSEC-2022-0076.html"
					],
					"PublishedDate": "2022-11-10T20:15:00Z",
					"LastModifiedDate": "2022-11-16T02:42:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-39393",
					"PkgID": "github.com/bytecodealliance/wasmtime-go@v1.0.0",
					"PkgName": "github.com/bytecodealliance/wasmtime-go",
					"InstalledVersion": "1.0.0",
					"FixedVersion": "v1.0.2, v2.0.2",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-39393",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "Wasmtime may have data leakage between instances in the pooling allocator",
					"Description": "Wasmtime is a standalone runtime for WebAssembly. Prior to version 2.0.2, there is a bug in Wasmtime's implementation of its pooling instance allocator where when a linear memory is reused for another instance the initial heap snapshot of the prior instance can be visible, erroneously to the next instance. This bug has been patched and users should upgrade to Wasmtime 2.0.2. Other mitigations include disabling the pooling allocator and disabling the `memory-init-cow`.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-212"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:N/A:N",
							"V3Score": 8.6
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:N/A:N",
							"V3Score": 8.6
						}
					},
					"References": [
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-39393",
						"https://github.com/advisories/GHSA-wh6w-3828-g9qf",
						"https://github.com/bytecodealliance/wasmtime/commit/2614f2e9d2d36805ead8a8da0fa0c6e0d9e428a0",
						"https://github.com/bytecodealliance/wasmtime/commit/3535acbf3be032ef1ba0b469b8ab92538a8a18a6",
						"https://github.com/bytecodealliance/wasmtime/security/advisories/GHSA-wh6w-3828-g9qf",
						"https://groups.google.com/a/bytecodealliance.org/g/sec-announce/c/c1HBDDJwNPA",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-39393",
						"https://rustsec.org/advisories/RUSTSEC-2022-0075.html"
					],
					"PublishedDate": "2022-11-10T20:15:00Z",
					"LastModifiedDate": "2022-11-17T16:01:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-26160",
					"PkgID": "github.com/dgrijalva/jwt-go@v3.2.0+incompatible",
					"PkgName": "github.com/dgrijalva/jwt-go",
					"InstalledVersion": "3.2.0+incompatible",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-26160",
					"DataSource": {
						"ID": "go-vulndb",
						"Name": "The Go Vulnerability Database",
						"URL": "https://github.com/golang/vulndb"
					},
					"Title": "jwt-go: access restriction bypass vulnerability",
					"Description": "jwt-go before 4.0.0-preview1 allows attackers to bypass intended access restrictions in situations with []string{} for m[\"aud\"] (which is allowed by the specification). Because the type assertion fails, \"\" is the value of aud. This is a security problem if the JWT token is presented to a service that lacks its own audience check.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-862"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 7.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V2Score": 5,
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 7.5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-26160",
						"https://github.com/advisories/GHSA-w73w-5m7g-f7qc",
						"https://github.com/dgrijalva/jwt-go/commit/ec0a89a131e3e8567adcb21254a5cd20a70ea4ab",
						"https://github.com/dgrijalva/jwt-go/issues/422",
						"https://github.com/dgrijalva/jwt-go/issues/462",
						"https://github.com/dgrijalva/jwt-go/pull/426",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-26160",
						"https://pkg.go.dev/vuln/GO-2020-0017",
						"https://snyk.io/vuln/SNYK-GOLANG-GITHUBCOMDGRIJALVAJWTGO-596515"
					],
					"PublishedDate": "2020-09-30T18:15:00Z",
					"LastModifiedDate": "2021-07-21T11:39:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-1996",
					"PkgID": "github.com/emicklei/go-restful@v2.9.5+incompatible",
					"PkgName": "github.com/emicklei/go-restful",
					"InstalledVersion": "2.9.5+incompatible",
					"FixedVersion": "2.16.0",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-1996",
					"DataSource": {
						"ID": "go-vulndb",
						"Name": "The Go Vulnerability Database",
						"URL": "https://github.com/golang/vulndb"
					},
					"Title": "go-restful: Authorization Bypass Through User-Controlled Key",
					"Description": "Authorization Bypass Through User-Controlled Key in GitHub repository emicklei/go-restful prior to v3.8.0.",
					"Severity": "CRITICAL",
					"CweIDs": [
						"CWE-639"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N",
							"V3Score": 9.1
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:P/I:P/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N",
							"V2Score": 6.4,
							"V3Score": 9.1
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N",
							"V3Score": 9.1
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2022-1996",
						"https://github.com/advisories/GHSA-r48q-9g5r-8q2h",
						"https://github.com/emicklei/go-restful/commit/926662532deb450272956c7bc573978464aae74e",
						"https://github.com/emicklei/go-restful/commit/f292efff46ae17e9d104f865a60a39a2ae9402f1",
						"https://github.com/emicklei/go-restful/commit/fd3c327a379ce08c68ef18765bdc925f5d9bad10",
						"https://github.com/emicklei/go-restful/issues/489",
						"https://huntr.dev/bounties/be837427-415c-4d8c-808b-62ce20aa84f1",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/575BLJ3Y2EQBRNTFR2OSQQ6L2W6UCST3/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/OBDD3Q23RCGAGHIXUCWBU6N3S4RNAKXB/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/RQXU752ALW53OJAF5MG3WMR5CCZVLWW6/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/SO5QC2JFW2PXBWAE27OYYYL5SPFUBHTY/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/W56PP46JVZEKCANBKXFKRVSBBRRMCY6V/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/Z55VUVGO7E5PJFXIOVAY373NZRHBNCI5/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/ZGQKWD6SE75PFBPFVSZYAKAVXKBZXKWS/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/ZY2SLWOQR4ZURQ7UBRZ7JIX6H6F5JHJR/",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-1996",
						"https://pkg.go.dev/vuln/GO-2022-0619",
						"https://security.netapp.com/advisory/ntap-20220923-0005/"
					],
					"PublishedDate": "2022-06-08T13:15:00Z",
					"LastModifiedDate": "2023-02-23T04:15:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-40083",
					"PkgID": "github.com/labstack/echo/v4@v4.7.2",
					"PkgName": "github.com/labstack/echo/v4",
					"InstalledVersion": "4.7.2",
					"FixedVersion": "4.9.0",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-40083",
					"DataSource": {
						"ID": "go-vulndb",
						"Name": "The Go Vulnerability Database",
						"URL": "https://github.com/golang/vulndb"
					},
					"Title": "Labstack Echo Open Redirect vulnerability",
					"Description": "Labstack Echo v4.8.0 was discovered to contain an open redirect vulnerability via the Static Handler component. This vulnerability can be leveraged by attackers to cause a Server-Side Request Forgery (SSRF).",
					"Severity": "CRITICAL",
					"CweIDs": [
						"CWE-601"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:H/A:H",
							"V3Score": 9.6
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:H/A:H",
							"V3Score": 9.6
						}
					},
					"References": [
						"https://github.com/advisories/GHSA-crxj-hrmp-4rwf",
						"https://github.com/labstack/echo/issues/2259",
						"https://github.com/labstack/echo/pull/2260",
						"https://github.com/labstack/echo/releases/tag/v4.9.0",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-40083",
						"https://pkg.go.dev/vuln/GO-2022-1031"
					],
					"PublishedDate": "2022-09-28T14:15:00Z",
					"LastModifiedDate": "2022-09-29T19:04:00Z"
				},
				{
					"VulnerabilityID": "CVE-2019-3826",
					"PkgID": "github.com/prometheus/prometheus@v2.5.0+incompatible",
					"PkgName": "github.com/prometheus/prometheus",
					"InstalledVersion": "2.5.0+incompatible",
					"FixedVersion": "v2.7.1",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2019-3826",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "prometheus: Stored DOM cross-site scripting (XSS) attack via crafted URL",
					"Description": "A stored, DOM based, cross-site scripting (XSS) flaw was found in Prometheus before version 2.7.1. An attacker could exploit this by convincing an authenticated user to visit a crafted URL on a Prometheus server, allowing for the execution and persistent storage of arbitrary scripts.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-79"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:N/C:N/I:P/A:N",
							"V3Vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
							"V2Score": 4.3,
							"V3Score": 6.1
						},
						"redhat": {
							"V3Vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N",
							"V3Score": 6.1
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHBA-2019:0327",
						"https://access.redhat.com/security/cve/CVE-2019-3826",
						"https://advisory.checkmarx.net/advisory/CX-2019-4297",
						"https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2019-3826",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-3826",
						"https://github.com/prometheus/prometheus/commit/62e591f9",
						"https://github.com/prometheus/prometheus/pull/5163",
						"https://lists.apache.org/thread.html/r48d5019bd42e0770f7e5351e420a63a41ff1f16924942442c6aff6a8@%3Ccommits.zookeeper.apache.org%3E",
						"https://lists.apache.org/thread.html/r8e3f7da12bf5750b0a02e69a78a61073a2ac950eed7451ce70a65177@%3Ccommits.zookeeper.apache.org%3E",
						"https://lists.apache.org/thread.html/rdf2a0d94c3b5b523aeff7741ae71347415276062811b687f30ea6573@%3Ccommits.zookeeper.apache.org%3E",
						"https://nvd.nist.gov/vuln/detail/CVE-2019-3826"
					],
					"PublishedDate": "2019-03-26T18:29:00Z",
					"LastModifiedDate": "2021-03-31T21:15:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-21221",
					"PkgID": "github.com/valyala/fasthttp@v1.30.0",
					"PkgName": "github.com/valyala/fasthttp",
					"InstalledVersion": "1.30.0",
					"FixedVersion": "1.34.0",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-21221",
					"DataSource": {
						"ID": "go-vulndb",
						"Name": "The Go Vulnerability Database",
						"URL": "https://github.com/golang/vulndb"
					},
					"Title": "Path traversal in github.com/valyala/fasthttp",
					"Description": "The package github.com/valyala/fasthttp before 1.34.0 are vulnerable to Directory Traversal via the ServeFile function, due to improper sanitization. It is possible to be exploited by using a backslash %5c character in the path. **Note:** This security issue impacts Windows users only.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-22"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 7.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V2Score": 5,
							"V3Score": 7.5
						}
					},
					"References": [
						"https://github.com/advisories/GHSA-fx95-883v-4q4h",
						"https://github.com/valyala/fasthttp/commit/15262ecf3c602364639d465daba1e7f3604d00e8",
						"https://github.com/valyala/fasthttp/commit/6b5bc7bb304975147b4af68df54ac214ed2554c1",
						"https://github.com/valyala/fasthttp/issues/1226",
						"https://github.com/valyala/fasthttp/releases/tag/v1.34.0",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-21221",
						"https://pkg.go.dev/vuln/GO-2022-0355",
						"https://snyk.io/vuln/SNYK-GOLANG-GITHUBCOMVALYALAFASTHTTP-2407866"
					],
					"PublishedDate": "2022-03-17T12:15:00Z",
					"LastModifiedDate": "2022-03-24T02:27:00Z"
				},
				{
					"VulnerabilityID": "CVE-2018-1098",
					"PkgID": "go.etcd.io/etcd@v0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"PkgName": "go.etcd.io/etcd",
					"InstalledVersion": "0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"FixedVersion": "v3.3.2",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2018-1098",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "etcd: Cross-site request forgery via crafted local POST forms",
					"Description": "A cross-site request forgery flaw was found in etcd 3.3.1 and earlier. An attacker can set up a website that tries to send a POST request to the etcd server and modify a key. Adding a key is done with PUT so it is theoretically safe (can't PUT from an HTML form or such) but POST allows creating in-order keys that an attacker can send.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-352"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
							"V3Score": 8.8
						},
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:N/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
							"V2Score": 6.8,
							"V3Score": 8.8
						},
						"redhat": {
							"V3Vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:N",
							"V3Score": 6.5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2018-1098",
						"https://bugzilla.redhat.com/show_bug.cgi?id=1552714",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1098",
						"https://github.com/advisories/GHSA-5gjm-fj42-x983",
						"https://github.com/coreos/etcd/commit/a7e5790c82039945639798ae9a3289fe787f5e56",
						"https://github.com/coreos/etcd/issues/9353",
						"https://github.com/etcd-io/etcd/issues/10479",
						"https://lists.fedoraproject.org/archives/list/package-announce%40lists.fedoraproject.org/message/JX7QTIT465BQGRGNCE74RATRQLKT2QE4/",
						"https://lists.fedoraproject.org/archives/list/package-announce%40lists.fedoraproject.org/message/UPGYHMSKDPW5GAMI7BEP3XQRVRLLBJKS/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/JX7QTIT465BQGRGNCE74RATRQLKT2QE4/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UPGYHMSKDPW5GAMI7BEP3XQRVRLLBJKS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2018-1098"
					],
					"PublishedDate": "2018-04-03T16:29:00Z",
					"LastModifiedDate": "2023-02-13T04:53:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-15115",
					"PkgID": "go.etcd.io/etcd@v0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"PkgName": "go.etcd.io/etcd",
					"InstalledVersion": "0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"FixedVersion": "3.3.23, 3.4.10",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-15115",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "etcd: improper validation of passwords allow an attacker to guess or brute-force user's passwords",
					"Description": "etcd before versions 3.3.23 and 3.4.10 does not perform any password length validation, which allows for very short passwords, such as those with a length of one. This may allow an attacker to guess or brute-force users' passwords with little computational effort.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-521"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:L/I:N/A:N",
							"V3Score": 5.8
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V2Score": 5,
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 7.5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-15115",
						"https://github.com/advisories/GHSA-4993-m7g5-r9hh",
						"https://github.com/etcd-io/etcd/security/advisories/GHSA-4993-m7g5-r9hh",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/L6B6R43Y7M3DCHWK3L3UVGE2K6WWECMP/",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-15115"
					],
					"PublishedDate": "2020-08-06T22:15:00Z",
					"LastModifiedDate": "2022-11-21T20:36:00Z"
				},
				{
					"VulnerabilityID": "CVE-2018-1099",
					"PkgID": "go.etcd.io/etcd@v0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"PkgName": "go.etcd.io/etcd",
					"InstalledVersion": "0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"FixedVersion": "v3.3.2",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2018-1099",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "etcd: DNS rebinding vulnerability in etcd server",
					"Description": "DNS rebinding vulnerability found in etcd 3.3.1 and earlier. An attacker can control his DNS records to direct to localhost, and trick the browser into sending requests to localhost (or any other address).",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-20"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:N",
							"V3Score": 5.5
						},
						"nvd": {
							"V2Vector": "AV:L/AC:L/Au:N/C:N/I:P/A:N",
							"V3Vector": "CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:N",
							"V2Score": 2.1,
							"V3Score": 5.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.0/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:L/A:L",
							"V3Score": 5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2018-1099",
						"https://bugzilla.redhat.com/show_bug.cgi?id=1552717",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1099",
						"https://github.com/advisories/GHSA-wf43-55jj-vwq8",
						"https://github.com/coreos/etcd/commit/a7e5790c82039945639798ae9a3289fe787f5e56",
						"https://github.com/coreos/etcd/issues/9353",
						"https://github.com/etcd-io/etcd/issues/10479",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/JX7QTIT465BQGRGNCE74RATRQLKT2QE4/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/UPGYHMSKDPW5GAMI7BEP3XQRVRLLBJKS/",
						"https://nvd.nist.gov/vuln/detail/CVE-2018-1099"
					],
					"PublishedDate": "2018-04-03T16:29:00Z",
					"LastModifiedDate": "2019-05-06T06:29:00Z"
				},
				{
					"VulnerabilityID": "GHSA-528j-9r78-wffx",
					"PkgID": "go.etcd.io/etcd@v0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"PkgName": "go.etcd.io/etcd",
					"InstalledVersion": "0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"FixedVersion": "3.3.23, 3.4.10",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://github.com/advisories/GHSA-528j-9r78-wffx",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "etcd user credentials are stored in WAL logs in plaintext",
					"Description": "### Vulnerability type\nData Exposure\n\n### Workarounds\nThe etcd assumes that the on disk files are secure. The possible fixes have been provided, however, it is the responsibility of the etcd users to make sure that the etcd server WAL log files are secure. The [etcd doesn't encrypt key/value data stored on disk drives]( https://github.com/etcd-io/etcd/blob/master/Documentation/op-guide/security.md#does-etcd-encrypt-data-stored-on-disk-drives).\n\n### Detail\nUser credentials (login and password) are stored in WAL entries on each user authentication. If the WAL log files are not secure, it can potentially expose sensitive information.\n\n### References\nFind out more on this vulnerability in the [security audit report](https://github.com/etcd-io/etcd/blob/master/security/SECURITY_AUDIT.pdf)\n\n### For more information\nIf you have any questions or comments about this advisory:\n* Contact the [etcd security committee](https://github.com/etcd-io/etcd/blob/master/security/security-release-process.md#product-security-committee-psc)",
					"Severity": "LOW",
					"References": [
						"https://github.com/advisories/GHSA-528j-9r78-wffx",
						"https://github.com/etcd-io/etcd/security/advisories/GHSA-528j-9r78-wffx"
					]
				},
				{
					"VulnerabilityID": "GHSA-9gp7-6833-wv89",
					"PkgID": "go.etcd.io/etcd@v0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"PkgName": "go.etcd.io/etcd",
					"InstalledVersion": "0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"FixedVersion": "3.3.23, 3.4.10",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://github.com/advisories/GHSA-9gp7-6833-wv89",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "etcd having a negative value for cluster node size results in an index out-of-bound panic during service discovery",
					"Description": "### Vulnerability type\nData Validation\n\n### Detail\nWhen an etcd instance attempts to perform service discovery, if a cluster size is provided as a negative value, the etcd instance will panic without recovery.\n\n### References\nFind out more on this vulnerability in the [security audit report](https://github.com/etcd-io/etcd/blob/master/security/SECURITY_AUDIT.pdf)\n\n### For more information\nIf you have any questions or comments about this advisory:\n* Contact the [etcd security committee](https://github.com/etcd-io/etcd/blob/master/security/security-release-process.md#product-security-committee-psc)",
					"Severity": "LOW",
					"References": [
						"https://github.com/advisories/GHSA-9gp7-6833-wv89",
						"https://github.com/etcd-io/etcd/security/advisories/GHSA-9gp7-6833-wv89"
					]
				},
				{
					"VulnerabilityID": "GHSA-h8g9-6gvh-5mrc",
					"PkgID": "go.etcd.io/etcd@v0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"PkgName": "go.etcd.io/etcd",
					"InstalledVersion": "0.5.0-alpha.5.0.20200910180754-dd1b699fc489",
					"FixedVersion": "3.3.23, 3.4.10",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://github.com/advisories/GHSA-h8g9-6gvh-5mrc",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "etcd vulnerable to TOCTOU of gateway endpoint authentication",
					"Description": "### Vulnerability type\nAuthentication\n\n### Workarounds\nRefer to the [gateway documentation](https://github.com/etcd-io/etcd/blob/master/Documentation/op-guide/gateway.md). The vulnerability was spotted due to unclear documentation of how the gateway handles endpoints validation. \n\n### Detail\nThe gateway only authenticates endpoints detected from DNS SRV records, and it only authenticates the detected endpoints once. Therefore, if an endpoint changes its authentication settings, the gateway will continue to assume the endpoint is still authenticated. The auditors has noted that appropriate documentation of this validation functionality plus deprecation of this misleading functionality is an acceptable path forward.\n\n### References\nFind out more on this vulnerability in the [security audit report](https://github.com/etcd-io/etcd/blob/master/security/SECURITY_AUDIT.pdf)\n\n### For more information\nIf you have any questions or comments about this advisory:\n* Contact the [etcd security committee](https://github.com/etcd-io/etcd/blob/master/security/security-release-process.md#product-security-committee-psc)",
					"Severity": "LOW",
					"References": [
						"https://github.com/advisories/GHSA-h8g9-6gvh-5mrc",
						"https://github.com/etcd-io/etcd/security/advisories/GHSA-h8g9-6gvh-5mrc"
					]
				},
				{
					"VulnerabilityID": "CVE-2022-41727",
					"PkgID": "golang.org/x/image@v0.0.0-20190802002840-cff245a6509b",
					"PkgName": "golang.org/x/image",
					"InstalledVersion": "0.0.0-20190802002840-cff245a6509b",
					"FixedVersion": "0.5.0",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-41727",
					"DataSource": {
						"ID": "go-vulndb",
						"Name": "The Go Vulnerability Database",
						"URL": "https://github.com/golang/vulndb"
					},
					"Title": "golang.org/x/image: Uncontrolled Resource Consumption",
					"Description": "An attacker can craft a malformed TIFF image which will consume a significant amount of memory when passed to DecodeConfig. This could lead to a denial of service.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-400"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
							"V3Score": 5.5
						},
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
							"V3Score": 5.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H",
							"V3Score": 5.5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2022-41727",
						"https://github.com/advisories/GHSA-qgc7-mgm3-q253",
						"https://go.dev/cl/468195",
						"https://go.dev/issue/58003",
						"https://groups.google.com/g/golang-announce/c/ag-FiyjlD5o",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-41727",
						"https://pkg.go.dev/vuln/GO-2023-1572"
					],
					"PublishedDate": "2023-02-28T18:15:00Z",
					"LastModifiedDate": "2023-03-10T00:15:00Z"
				},
				{
					"VulnerabilityID": "GHSA-qgc7-mgm3-q253",
					"PkgID": "golang.org/x/image@v0.0.0-20190802002840-cff245a6509b",
					"PkgName": "golang.org/x/image",
					"InstalledVersion": "0.0.0-20190802002840-cff245a6509b",
					"FixedVersion": "0.5.0",
					"Layer": {},
					"PrimaryURL": "https://github.com/advisories/GHSA-qgc7-mgm3-q253",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "Uncontrolled Resource Consumption",
					"Description": "An attacker can craft a malformed TIFF image which will consume a significant amount of memory when passed to DecodeConfig. This could lead to a denial of service.",
					"Severity": "UNKNOWN",
					"References": [
						"https://github.com/advisories/GHSA-qgc7-mgm3-q253",
						"https://go.dev/cl/468195",
						"https://go.dev/issue/58003",
						"https://groups.google.com/g/golang-announce/c/ag-FiyjlD5o",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-41727",
						"https://pkg.go.dev/vuln/GO-2023-1572"
					]
				},
				{
					"VulnerabilityID": "CVE-2019-11253",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.13.12, 1.14.8, 1.15.5, 1.16.2",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2019-11253",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: YAML parsing vulnerable to \"Billion Laughs\" attack, allowing for remote denial of service",
					"Description": "Improper input validation in the Kubernetes API server in versions v1.0-1.12 and versions prior to v1.13.12, v1.14.8, v1.15.5, and v1.16.2 allows authorized users to send malicious YAML or JSON payloads, causing the API server to consume excessive CPU or memory, potentially crashing and becoming unavailable. Prior to v1.14.0, default RBAC policy authorized anonymous users to submit requests that could trigger this vulnerability. Clusters upgraded from a version prior to v1.14.0 keep the more permissive policy by default for backwards compatibility.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-776"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:N/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V2Score": 5,
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						}
					},
					"References": [
						"https://access.redhat.com/errata/RHSA-2019:3239",
						"https://access.redhat.com/errata/RHSA-2019:3811",
						"https://access.redhat.com/errata/RHSA-2019:3905",
						"https://access.redhat.com/security/cve/CVE-2019-11253",
						"https://gist.github.com/bgeesaman/0e0349e94cd22c48bf14d8a9b7d6b8f2",
						"https://github.com/advisories/GHSA-pmqp-h87c-mr78",
						"https://github.com/kubernetes/kubernetes/issues/83253",
						"https://github.com/kubernetes/kubernetes/pull/83261",
						"https://groups.google.com/forum/#!topic/kubernetes-security-announce/jk8polzSUxs",
						"https://linux.oracle.com/cve/CVE-2019-11253.html",
						"https://linux.oracle.com/errata/ELSA-2019-4816.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2019-11253",
						"https://security.netapp.com/advisory/ntap-20191031-0006/",
						"https://www.stackrox.com/post/2019/09/protecting-kubernetes-api-against-cve-2019-11253-billion-laughs-attack/"
					],
					"PublishedDate": "2019-10-17T16:15:00Z",
					"LastModifiedDate": "2020-10-02T17:11:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8558",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.16.11, 1.17.7, 1.18.4",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8558",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: node localhost services reachable via martian packets",
					"Description": "The Kubelet and kube-proxy components in versions 1.1.0-1.16.10, 1.17.0-1.17.6, and 1.18.0-1.18.3 were found to contain a security issue which allows adjacent hosts to reach TCP and UDP services bound to 127.0.0.1 running on the node or in the node's network namespace. Such a service is generally thought to be reachable only by other processes on the same host, but due to this defeect, could be reachable by other hosts on the same LAN as the node, or by containers running on the same node as the service.",
					"Severity": "HIGH",
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:A/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 8.8
						},
						"nvd": {
							"V2Vector": "AV:A/AC:L/Au:N/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:A/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 5.8,
							"V3Score": 8.8
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:A/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
							"V3Score": 5.4
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8558",
						"https://bugzilla.redhat.com/show_bug.cgi?id=1843358",
						"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-8558",
						"https://github.com/advisories/GHSA-wqv3-8cm6-h6wg",
						"https://github.com/bottlerocket-os/bottlerocket/security/advisories/GHSA-wqv3-8cm6-h6wg",
						"https://github.com/kubernetes/kubernetes/issues/92315",
						"https://github.com/tabbysable/POC-2020-8558",
						"https://groups.google.com/g/kubernetes-announce/c/sI4KmlH3S2I/m/TljjxOBvBQAJ",
						"https://groups.google.com/g/kubernetes-security-announce/c/B1VegbBDMTE",
						"https://labs.bishopfox.com/tech-blog/bad-pods-kubernetes-pod-privilege-escalation",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8558",
						"https://security.netapp.com/advisory/ntap-20200821-0001/",
						"https://www.openwall.com/lists/oss-security/2020/07/08/1"
					],
					"PublishedDate": "2020-07-27T20:15:00Z",
					"LastModifiedDate": "2022-09-20T17:17:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-25741",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.19.15, 1.20.11, 1.21.5, 1.22.2",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-25741",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: Symlink exchange can allow host filesystem access",
					"Description": "A security issue was discovered in Kubernetes where a user may be able to create a container with subpath volume mounts to access files \u0026 directories outside of the volume, including on the host filesystem.",
					"Severity": "HIGH",
					"CweIDs": [
						"CWE-552"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N",
							"V3Score": 8.1
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N",
							"V2Score": 5.5,
							"V3Score": 8.1
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 8.8
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-25741",
						"https://github.com/advisories/GHSA-f5f7-6478-qm6p",
						"https://github.com/bottlerocket-os/bottlerocket/security/advisories/GHSA-f5f7-6478-qm6p",
						"https://github.com/kubernetes/kubernetes/issues/104980",
						"https://groups.google.com/g/kubernetes-security-announce/c/nyfdhK24H7s",
						"https://linux.oracle.com/cve/CVE-2021-25741.html",
						"https://linux.oracle.com/errata/ELSA-2021-9546.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-25741",
						"https://security.netapp.com/advisory/ntap-20211008-0006/"
					],
					"PublishedDate": "2021-09-20T17:15:00Z",
					"LastModifiedDate": "2021-11-30T22:42:00Z"
				},
				{
					"VulnerabilityID": "CVE-2019-1002101",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.11.9, 1.12.7, 1.13.5, 1.14.1-beta.0",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2019-1002101",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: Mishandling of symlinks allows for arbitrary file write via `kubectl cp`",
					"Description": "The kubectl cp command allows copying files between containers and the user machine. To copy files from a container, Kubernetes creates a tar inside the container, copies it over the network, and kubectl unpacks it on the user’s machine. If the tar binary in the container is malicious, it could run any code and output unexpected, malicious results. An attacker could use this to write files to any path on the user’s machine when kubectl cp is called, limited only by the system permissions of the local user. The untar function can both create and follow symbolic links. The issue is resolved in kubectl v1.11.9, v1.12.7, v1.13.5, and v1.14.0.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-59"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.0/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:N",
							"V3Score": 5.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:N/C:N/I:P/A:P",
							"V3Vector": "CVSS:3.0/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:N",
							"V2Score": 5.8,
							"V3Score": 5.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.0/AV:N/AC:H/PR:N/UI:R/S:U/C:N/I:H/A:N",
							"V3Score": 5.3
						}
					},
					"References": [
						"http://www.openwall.com/lists/oss-security/2019/06/21/1",
						"http://www.openwall.com/lists/oss-security/2019/08/05/5",
						"http://www.securityfocus.com/bid/107652",
						"https://access.redhat.com/errata/RHBA-2019:0619",
						"https://access.redhat.com/errata/RHBA-2019:0620",
						"https://access.redhat.com/errata/RHBA-2019:0636",
						"https://access.redhat.com/security/cve/CVE-2019-1002101",
						"https://access.redhat.com/security/cve/cve-2019-1002101",
						"https://discuss.kubernetes.io/t/announce-security-release-of-kubernetes-kubectl-potential-directory-traversal-releases-1-11-9-1-12-7-1-13-5-and-1-14-0-cve-2019-1002101/5712",
						"https://github.com/advisories/GHSA-34jx-wx69-9x8v",
						"https://github.com/kubernetes/kubernetes/commit/47063891dd782835170f500a83f37cc98c3c1013",
						"https://github.com/kubernetes/kubernetes/pull/75037",
						"https://linux.oracle.com/cve/CVE-2019-1002101.html",
						"https://linux.oracle.com/errata/ELSA-2019-4593.html",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/BPV2RE5RMOGUVP5WJMXKQJZUBBLAFZPZ/",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/QZB7E3DOZ5WDG46XAIU6K32CXHXPXB2F/",
						"https://nvd.nist.gov/vuln/detail/CVE-2019-1002101",
						"https://www.twistlock.com/labs-blog/disclosing-directory-traversal-vulnerability-kubernetes-copy-cve-2019-1002101/"
					],
					"PublishedDate": "2019-04-01T14:29:00Z",
					"LastModifiedDate": "2020-02-10T21:49:00Z"
				},
				{
					"VulnerabilityID": "CVE-2019-11250",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.16.0-beta.1",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2019-11250",
					"DataSource": {
						"ID": "go-vulndb",
						"Name": "The Go Vulnerability Database",
						"URL": "https://github.com/golang/vulndb"
					},
					"Title": "kubernetes: Bearer tokens written to logs at high verbosity levels (\u003e= 7)",
					"Description": "The Kubernetes client-go library logs request headers at verbosity levels of 7 or higher. This can disclose credentials to unauthorized users via logs or command output. Kubernetes components (such as kube-apiserver) prior to v1.16.0, which make use of basic or bearer token authentication, and run at high verbosity levels, are affected.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-532"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 6.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:S/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
							"V2Score": 3.5,
							"V3Score": 6.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.0/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 4.4
						}
					},
					"References": [
						"http://www.openwall.com/lists/oss-security/2020/10/16/2",
						"https://access.redhat.com/errata/RHSA-2019:4052",
						"https://access.redhat.com/errata/RHSA-2019:4087",
						"https://access.redhat.com/errata/RHSA-2019:4087https://nvd.nist.gov/vuln/detail/CVE-2019-11250",
						"https://access.redhat.com/security/cve/CVE-2019-11250",
						"https://github.com/advisories/GHSA-jmrx-5g74-6v2f",
						"https://github.com/kubernetes/kubernetes/commit/4441f1d9c3e94d9a3d93b4f184a591cab02a5245",
						"https://github.com/kubernetes/kubernetes/issues/81114",
						"https://github.com/kubernetes/kubernetes/pull/81330",
						"https://nvd.nist.gov/vuln/detail/CVE-2019-11250",
						"https://pkg.go.dev/vuln/GO-2021-0065",
						"https://security.netapp.com/advisory/ntap-20190919-0003/"
					],
					"PublishedDate": "2019-08-29T01:15:00Z",
					"LastModifiedDate": "2020-10-16T09:15:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8552",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.15.10, 1.16.7, 1.17.3",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8552",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: Use of unbounded 'client' label in apiserver_request_total allows for memory exhaustion",
					"Description": "The Kubernetes API server component in versions prior to 1.15.9, 1.16.0-1.16.6, and 1.17.0-1.17.2 has been found to be vulnerable to a denial of service attack via successful API requests.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-770"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
							"V3Score": 5.3
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:N/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L",
							"V2Score": 4,
							"V3Score": 4.3
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L",
							"V3Score": 4.3
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8552",
						"https://github.com/advisories/GHSA-82hx-w2r5-c2wq",
						"https://github.com/kubernetes/kubernetes/commit/5978856c4c7f10737a11c9540fe60b8475beecbb",
						"https://github.com/kubernetes/kubernetes/issues/89378",
						"https://github.com/kubernetes/kubernetes/pull/87669",
						"https://groups.google.com/forum/#!topic/kubernetes-security-announce/2UOlsba2g0s",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/3SOCLOPTSYABTE4CLTSPDIFE6ZZZR4LX/",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8552",
						"https://security.netapp.com/advisory/ntap-20200413-0003/"
					],
					"PublishedDate": "2020-03-27T15:15:00Z",
					"LastModifiedDate": "2023-01-27T18:27:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8554",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8554",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: MITM using LoadBalancer or ExternalIPs",
					"Description": "Kubernetes API server in all versions allow an attacker who is able to create a ClusterIP service and set the spec.externalIPs field, to intercept traffic to that IP address. Additionally, an attacker who is able to patch the status (which is considered a privileged operation and should not typically be granted to users) of a LoadBalancer service can set the status.loadBalancer.ingress.ip to similar effect.",
					"Severity": "MEDIUM",
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:L/A:L",
							"V3Score": 5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:L/A:L",
							"V2Score": 6,
							"V3Score": 5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:L/A:L",
							"V3Score": 6.3
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8554",
						"https://blog.champtar.fr/K8S_MITM_LoadBalancer_ExternalIPs/",
						"https://github.com/advisories/GHSA-j9wf-vvm6-4r9w",
						"https://github.com/kubernetes/kubernetes/issues/97076",
						"https://github.com/kubernetes/kubernetes/issues/97110",
						"https://groups.google.com/g/kubernetes-security-announce/c/iZWsF9nbKE8",
						"https://linux.oracle.com/cve/CVE-2020-8554.html",
						"https://linux.oracle.com/errata/ELSA-2021-9029.html",
						"https://lists.apache.org/thread.html/r0c76b3d0be348f788cd947054141de0229af00c540564711e828fd40@%3Ccommits.druid.apache.org%3E",
						"https://lists.apache.org/thread.html/r1975078e44d96f2a199aa90aa874b57a202eaf7f25f2fde6d1c44942@%3Ccommits.druid.apache.org%3E",
						"https://lists.apache.org/thread.html/rcafa485d63550657f068775801aeb706b7a07140a8ebbdef822b3bb3@%3Ccommits.druid.apache.org%3E",
						"https://lists.apache.org/thread.html/rdb223e1b82e3d7d8e4eaddce8dd1ab87252e3935cc41c859f49767b6@%3Ccommits.druid.apache.org%3E",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8554",
						"https://www.oracle.com//security-alerts/cpujul2021.html",
						"https://www.oracle.com/security-alerts/cpuapr2022.html",
						"https://www.oracle.com/security-alerts/cpujan2022.html"
					],
					"PublishedDate": "2021-01-21T17:15:00Z",
					"LastModifiedDate": "2022-10-29T02:41:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8555",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.15.11, 1.16.9, 1.17.5, 1.18.1",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8555",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: Server side request forgery (SSRF) in kube-controller-manager allows users to leak secret information",
					"Description": "The Kubernetes kube-controller-manager in versions v1.0-1.14, versions prior to v1.15.12, v1.16.9, v1.17.5, and version v1.18.0 are vulnerable to a Server Side Request Forgery (SSRF) that allows certain authorized users to leak up to 500 bytes of arbitrary information from unprotected endpoints within the master's host network (such as link-local or loopback services).",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-918"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:N/A:N",
							"V3Score": 6.3
						},
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:S/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:N/A:N",
							"V2Score": 3.5,
							"V3Score": 6.3
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:N/A:N",
							"V3Score": 6.3
						}
					},
					"References": [
						"http://www.openwall.com/lists/oss-security/2020/06/01/4",
						"http://www.openwall.com/lists/oss-security/2021/05/04/8",
						"https://access.redhat.com/security/cve/CVE-2020-8555",
						"https://github.com/advisories/GHSA-x6mj-w4jf-jmgw",
						"https://github.com/kubernetes/kubernetes/issues/91542",
						"https://github.com/kubernetes/kubernetes/pull/89794",
						"https://groups.google.com/d/topic/kubernetes-security-announce/kEK27tqqs30/discussion",
						"https://groups.google.com/forum/#!topic/kubernetes-security-announce/kEK27tqqs30",
						"https://linux.oracle.com/cve/CVE-2020-8555.html",
						"https://linux.oracle.com/errata/ELSA-2020-5727.html",
						"https://lists.fedoraproject.org/archives/list/package-announce@lists.fedoraproject.org/message/3SOCLOPTSYABTE4CLTSPDIFE6ZZZR4LX/",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8555",
						"https://security.netapp.com/advisory/ntap-20200724-0005/"
					],
					"PublishedDate": "2020-06-05T17:15:00Z",
					"LastModifiedDate": "2022-11-16T03:39:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8557",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.16.13, 1.17.9, 1.18.6",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8557",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: Node disk DOS by writing to container /etc/hosts",
					"Description": "The Kubernetes kubelet component in versions 1.1-1.16.12, 1.17.0-1.17.8 and 1.18.0-1.18.5 do not account for disk usage by a pod which writes to its own /etc/hosts file. The /etc/hosts file mounted in a pod by kubelet is not included by the kubelet eviction manager when calculating ephemeral storage usage by a pod. If a pod writes a large amount of data to the /etc/hosts file, it could fill the storage space of the node and cause the node to fail.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-400"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:L/AC:L/Au:N/C:N/I:N/A:P",
							"V3Vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H",
							"V2Score": 2.1,
							"V3Score": 5.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 5.5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8557",
						"https://github.com/kubernetes/kubernetes/issues/93032",
						"https://groups.google.com/g/kubernetes-security-announce/c/cB_JUsYEKyY",
						"https://groups.google.com/g/kubernetes-security-announce/c/cB_JUsYEKyY/m/vVSO61AhBwAJ",
						"https://linux.oracle.com/cve/CVE-2020-8557.html",
						"https://linux.oracle.com/errata/ELSA-2020-5767.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8557",
						"https://security.netapp.com/advisory/ntap-20200821-0002/"
					],
					"PublishedDate": "2020-07-23T17:15:00Z",
					"LastModifiedDate": "2023-01-27T20:35:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8559",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.16.13, 1.17.9, 1.18.6",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8559",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: compromised node could escalate to cluster level privileges",
					"Description": "The Kubernetes kube-apiserver in versions v1.6-v1.15, and versions prior to v1.16.13, v1.17.9 and v1.18.6 are vulnerable to an unvalidated redirect on proxied upgrade requests that could allow an attacker to escalate privileges from a node compromise to a full cluster compromise.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-601"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:R/S:U/C:H/I:H/A:H",
							"V2Score": 6,
							"V3Score": 6.8
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:R/S:U/C:H/I:H/A:H",
							"V3Score": 6.4
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8559",
						"https://github.com/kubernetes/kubernetes/issues/92914",
						"https://groups.google.com/d/msg/kubernetes-security-announce/JAIGG5yNROs/19nHQ5wkBwAJ",
						"https://groups.google.com/g/kubernetes-security-announce/c/JAIGG5yNROs",
						"https://linux.oracle.com/cve/CVE-2020-8559.html",
						"https://linux.oracle.com/errata/ELSA-2020-5767.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8559",
						"https://security.netapp.com/advisory/ntap-20200810-0004/"
					],
					"PublishedDate": "2020-07-22T14:15:00Z",
					"LastModifiedDate": "2023-01-27T20:34:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8561",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8561",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: Webhook redirect in kube-apiserver",
					"Description": "A security issue was discovered in Kubernetes where actors that control the responses of MutatingWebhookConfiguration or ValidatingWebhookConfiguration requests are able to redirect kube-apiserver requests to private networks of the apiserver. If that user can view kube-apiserver logs when the log level is set to 10, they can view the redirected responses and headers in the logs.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-610"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:C/C:L/I:N/A:N",
							"V3Score": 4.1
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:C/C:L/I:N/A:N",
							"V2Score": 4,
							"V3Score": 4.1
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:C/C:L/I:N/A:N",
							"V3Score": 4.1
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8561",
						"https://github.com/advisories/GHSA-74j8-88mm-7496",
						"https://github.com/kubernetes/kubernetes/issues/104720",
						"https://groups.google.com/g/kubernetes-security-announce/c/RV2IhwcrQsY",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8561",
						"https://security.netapp.com/advisory/ntap-20211014-0002/"
					],
					"PublishedDate": "2021-09-20T17:15:00Z",
					"LastModifiedDate": "2021-11-06T03:04:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8563",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.19.3",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8563",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: Secret leaks in kube-controller-manager when using vSphere Provider",
					"Description": "In Kubernetes clusters using VSphere as a cloud provider, with a logging level set to 4 or above, VSphere cloud credentials will be leaked in the cloud controller manager's log. This affects \u003c v1.19.3.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-532"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:L/AC:L/Au:N/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
							"V2Score": 2.1,
							"V3Score": 5.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:C/C:H/I:N/A:N",
							"V3Score": 6.3
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8563",
						"https://github.com/kubernetes/kubernetes/issues/95621",
						"https://groups.google.com/g/kubernetes-announce/c/ScdmyORnPDk",
						"https://groups.google.com/g/kubernetes-security-discuss/c/vm-HcrFUOCs/m/36utxAM5CwAJ",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8563",
						"https://security.netapp.com/advisory/ntap-20210122-0006/"
					],
					"PublishedDate": "2020-12-07T22:15:00Z",
					"LastModifiedDate": "2021-03-29T19:31:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8564",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.20.0-alpha.1",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8564",
					"DataSource": {
						"ID": "go-vulndb",
						"Name": "The Go Vulnerability Database",
						"URL": "https://github.com/golang/vulndb"
					},
					"Title": "kubernetes: Docker config secrets leaked when file is malformed and loglevel \u003e= 4",
					"Description": "In Kubernetes clusters using a logging level of at least 4, processing a malformed docker config file will result in the contents of the docker config file being leaked, which can include pull secrets or other registry credentials. This affects \u003c v1.19.3, \u003c v1.18.10, \u003c v1.17.13.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-532"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 4.7
						},
						"nvd": {
							"V2Vector": "AV:L/AC:L/Au:N/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
							"V2Score": 2.1,
							"V3Score": 5.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 5.3
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8564",
						"https://github.com/advisories/GHSA-8mjg-8c8g-6h85",
						"https://github.com/kubernetes/kubernetes/commit/11793434dac97a49bfed0150b56ac63e5dc34634",
						"https://github.com/kubernetes/kubernetes/issues/95622",
						"https://github.com/kubernetes/kubernetes/pull/94712",
						"https://groups.google.com/g/kubernetes-announce/c/ScdmyORnPDk",
						"https://groups.google.com/g/kubernetes-security-discuss/c/vm-HcrFUOCs/m/36utxAM5CwAJ",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8564",
						"https://pkg.go.dev/vuln/GO-2021-0066",
						"https://security.netapp.com/advisory/ntap-20210122-0006/"
					],
					"PublishedDate": "2020-12-07T22:15:00Z",
					"LastModifiedDate": "2021-03-29T19:30:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8565",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.20.0-alpha.2",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8565",
					"DataSource": {
						"ID": "go-vulndb",
						"Name": "The Go Vulnerability Database",
						"URL": "https://github.com/golang/vulndb"
					},
					"Title": "kubernetes: Incomplete fix for CVE-2019-11250 allows for token leak in logs when logLevel \u003e= 9",
					"Description": "In Kubernetes, if the logging level is set to at least 9, authorization and bearer tokens will be written to log files. This can occur both in API server logs and client tool output like kubectl. This affects \u003c= v1.19.3, \u003c= v1.18.10, \u003c= v1.17.13, \u003c v1.20.0-alpha2.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-532"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 4.7
						},
						"nvd": {
							"V2Vector": "AV:L/AC:L/Au:N/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
							"V2Score": 2.1,
							"V3Score": 5.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:N/A:N",
							"V3Score": 5.3
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8565",
						"https://github.com/advisories/GHSA-8cfg-vx93-jvxw",
						"https://github.com/kubernetes/kubernetes/commit/e99df0e5a75eb6e86123b56d53e9b7ca0fd00419",
						"https://github.com/kubernetes/kubernetes/issues/95623",
						"https://github.com/kubernetes/kubernetes/pull/95316",
						"https://groups.google.com/g/kubernetes-announce/c/ScdmyORnPDk",
						"https://groups.google.com/g/kubernetes-security-discuss/c/vm-HcrFUOCs/m/36utxAM5CwAJ",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8565",
						"https://pkg.go.dev/vuln/GO-2021-0064"
					],
					"PublishedDate": "2020-12-07T22:15:00Z",
					"LastModifiedDate": "2020-12-08T19:51:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-25735",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.18.18, 1.19.10, 1.20.6",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-25735",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: Validating Admission Webhook does not observe some previous fields",
					"Description": "A security issue was discovered in kube-apiserver that could allow node updates to bypass a Validating Admission Webhook. Clusters are only affected by this vulnerability if they run a Validating Admission Webhook for Nodes that denies admission based at least partially on the old state of the Node object. Validating Admission Webhook does not observe some previous fields.",
					"Severity": "MEDIUM",
					"CweIDs": [
						"CWE-863"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:N/I:H/A:H",
							"V3Score": 6.5
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:N/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:N/I:H/A:H",
							"V2Score": 5.5,
							"V3Score": 6.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:N/I:H/A:H",
							"V3Score": 6.5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-25735",
						"https://bugzilla.redhat.com/show_bug.cgi?id=1937562",
						"https://github.com/advisories/GHSA-g42g-737j-qx6j",
						"https://github.com/kubernetes/kubernetes/commit/00e81db174ef7aca497be5f42d87e46d14df2a90",
						"https://github.com/kubernetes/kubernetes/issues/100096",
						"https://github.com/kubernetes/kubernetes/pull/99946",
						"https://groups.google.com/g/kubernetes-security-announce/c/FKAGqT4jx9Y",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-25735",
						"https://pkg.go.dev/k8s.io/kubernetes@v1.23.5/cmd/kube-apiserver",
						"https://sysdig.com/blog/cve-2021-25735-kubernetes-admission-bypass/"
					],
					"PublishedDate": "2021-09-06T12:15:00Z",
					"LastModifiedDate": "2021-09-13T17:12:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-8562",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.21.1, 1.21.1, 1.19.11, 1.18.19, 1.18.19",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-8562",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: Bypass of Kubernetes API Server proxy TOCTOU",
					"Description": "As mitigations to a report from 2019 and CVE-2020-8555, Kubernetes attempts to prevent proxied connections from accessing link-local or localhost networks when making user-driven connections to Services, Pods, Nodes, or StorageClass service providers. As part of this mitigation Kubernetes does a DNS name resolution check and validates that response IPs are not in the link-local (169.254.0.0/16) or localhost (127.0.0.0/8) range. Kubernetes then performs a second DNS resolution without validation for the actual connection. If a non-standard DNS server returns different non-cached responses, a user may be able to bypass the proxy IP restriction and access private networks on the control plane.",
					"Severity": "LOW",
					"CweIDs": [
						"CWE-367"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:N",
							"V3Score": 3.1
						},
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:S/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:N",
							"V2Score": 3.5,
							"V3Score": 3.1
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:L/I:N/A:N",
							"V3Score": 2.2
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2020-8562",
						"https://github.com/advisories/GHSA-qh36-44jv-c8xj",
						"https://github.com/kubernetes/kubernetes/issues/101493",
						"https://groups.google.com/g/kubernetes-security-announce/c/-MFX60_wdOY",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-8562",
						"https://security.netapp.com/advisory/ntap-20220225-0002/"
					],
					"PublishedDate": "2022-02-01T11:15:00Z",
					"LastModifiedDate": "2022-03-29T16:35:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-25740",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-25740",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: Endpoint \u0026 EndpointSlice permissions allow cross-Namespace forwarding",
					"Description": "A security issue was discovered with Kubernetes that could enable users to send network traffic to locations they would otherwise not have access to via a confused deputy attack.",
					"Severity": "LOW",
					"CweIDs": [
						"CWE-610"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:N",
							"V3Score": 3.1
						},
						"nvd": {
							"V2Vector": "AV:N/AC:M/Au:S/C:P/I:N/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:N",
							"V2Score": 3.5,
							"V3Score": 3.1
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:N/A:N",
							"V3Score": 3.1
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-25740",
						"https://github.com/advisories/GHSA-vw47-mr44-3jf9",
						"https://github.com/kubernetes/kubernetes/issues/103675",
						"https://groups.google.com/g/kubernetes-security-announce/c/WYE9ptrhSLE",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-25740",
						"https://security.netapp.com/advisory/ntap-20211014-0001/"
					],
					"PublishedDate": "2021-09-20T17:15:00Z",
					"LastModifiedDate": "2021-11-06T02:49:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-25743",
					"PkgID": "k8s.io/kubernetes@v1.13.0",
					"PkgName": "k8s.io/kubernetes",
					"InstalledVersion": "1.13.0",
					"FixedVersion": "1.18.0",
					"Layer": {},
					"SeveritySource": "nvd",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-25743",
					"DataSource": {
						"ID": "glad",
						"Name": "GitLab Advisory Database Community",
						"URL": "https://gitlab.com/gitlab-org/advisories-community"
					},
					"Title": "kubernetes: kubectl does not neutralize escape, meta or control sequences contained in the raw data it outputs to a terminal",
					"Description": "kubectl does not neutralize escape, meta or control sequences contained in the raw data it outputs to a terminal. This includes but is not limited to the unstructured string fields in objects such as Events.",
					"Severity": "LOW",
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:R/S:C/C:N/I:L/A:N",
							"V3Score": 3
						},
						"nvd": {
							"V2Vector": "AV:N/AC:H/Au:S/C:N/I:P/A:N",
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:R/S:C/C:N/I:L/A:N",
							"V2Score": 2.1,
							"V3Score": 3
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:H/PR:L/UI:R/S:C/C:N/I:L/A:N",
							"V3Score": 3
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-25743",
						"https://github.com/advisories/GHSA-f9jg-8p32-2f55",
						"https://github.com/kubernetes/kubernetes/issues/101695",
						"https://github.com/kubernetes/kubernetes/pull/112553",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-25743",
						"https://security.netapp.com/advisory/ntap-20220217-0003/"
					],
					"PublishedDate": "2022-01-07T00:15:00Z",
					"LastModifiedDate": "2022-02-28T15:22:00Z"
				}
			]
		},
		{
			"Target": "Node.js",
			"Class": "lang-pkgs",
			"Type": "node-pkg",
			"Packages": [
				{
					"ID": "decode-uri-component@0.2.0",
					"Name": "decode-uri-component",
					"Version": "0.2.0",
					"Licenses": [
						"MIT"
					],
					"Layer": {},
					"FilePath": "node_modules/decode-uri-component/package.json"
				},
				{
					"ID": "glob-parent@5.1.2",
					"Name": "glob-parent",
					"Version": "5.1.2",
					"Licenses": [
						"ISC"
					],
					"Layer": {},
					"FilePath": "node_modules/glob-parent/package.json"
				},
				{
					"ID": "hoek@2.16.3",
					"Name": "hoek",
					"Version": "2.16.3",
					"Licenses": [
						"BSD-3-Clause"
					],
					"Layer": {},
					"FilePath": "node_modules/hoek/package.json"
				},
				{
					"ID": "json-schema@0.2.3",
					"Name": "json-schema",
					"Version": "0.2.3",
					"Layer": {},
					"FilePath": "node_modules/json-schema/package.json"
				},
				{
					"ID": "lodash@4.17.21",
					"Name": "lodash",
					"Version": "4.17.21",
					"Licenses": [
						"MIT"
					],
					"Layer": {},
					"FilePath": "node_modules/lodash/package.json"
				},
				{
					"ID": "ansi-regex@2.0.0",
					"Name": "ansi-regex",
					"Version": "2.0.0",
					"Licenses": [
						"MIT"
					],
					"Layer": {},
					"FilePath": "node_modules/ansi-regex/package.json"
				},
				{
					"ID": "aws-sdk@2.773.0",
					"Name": "aws-sdk",
					"Version": "2.773.0",
					"Licenses": [
						"Apache-2.0"
					],
					"Layer": {},
					"FilePath": "node_modules/aws-sdk/package.json"
				},
				{
					"ID": "copy-props@2.0.4",
					"Name": "copy-props",
					"Version": "2.0.4",
					"Licenses": [
						"MIT"
					],
					"Layer": {},
					"FilePath": "node_modules/copy-props/package.json"
				},
				{
					"ID": "exaple@1.0.0",
					"Name": "exaple",
					"Version": "1.0.0",
					"Licenses": [
						"ISC"
					],
					"Layer": {},
					"FilePath": "package.json"
				}
			],
			"Vulnerabilities": [
				{
					"VulnerabilityID": "CVE-2020-28472",
					"PkgID": "aws-sdk@2.773.0",
					"PkgName": "aws-sdk",
					"PkgPath": "node_modules/aws-sdk/package.json",
					"InstalledVersion": "2.773.0",
					"FixedVersion": "2.814.0",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-28472",
					"DataSource": {
						"ID": "ghsa",
						"Name": "GitHub Security Advisory Npm",
						"URL": "https://github.com/advisories?query=type%3Areviewed+ecosystem%3Anpm"
					},
					"Title": "Prototype Pollution via file load in aws-sdk and @aws-sdk/shared-ini-file-loader",
					"Description": "This affects the package @aws-sdk/shared-ini-file-loader before 1.0.0-rc.9; the package aws-sdk before 2.814.0. If an attacker submits a malicious INI file to an application that parses it with loadSharedConfigFiles , they will pollute the prototype on the application. This can be exploited further depending on the context.",
					"Severity": "HIGH",
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L",
							"V3Score": 7.3
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 7.5,
							"V3Score": 9.8
						}
					},
					"References": [
						"https://github.com/advisories/GHSA-rrc9-gqf8-8rwg",
						"https://github.com/aws/aws-sdk-js-v3/commit/a209082dff913939672bb069964b33aa4c5409a9",
						"https://github.com/aws/aws-sdk-js/pull/3585/commits/7d72aff2a941173733fcb6741b104cd83d3bc611",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-28472",
						"https://snyk.io/vuln/SNYK-JAVA-ORGWEBJARSBOWER-1059426",
						"https://snyk.io/vuln/SNYK-JAVA-ORGWEBJARSNPM-1059425",
						"https://snyk.io/vuln/SNYK-JS-AWSSDK-1059424",
						"https://snyk.io/vuln/SNYK-JS-AWSSDKSHAREDINIFILELOADER-1049304"
					],
					"PublishedDate": "2021-01-19T11:15:00Z",
					"LastModifiedDate": "2021-01-28T15:16:00Z"
				},
				{
					"VulnerabilityID": "CVE-2020-28503",
					"PkgID": "copy-props@2.0.4",
					"PkgName": "copy-props",
					"PkgPath": "node_modules/copy-props/package.json",
					"InstalledVersion": "2.0.4",
					"FixedVersion": "2.0.5",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2020-28503",
					"DataSource": {
						"ID": "ghsa",
						"Name": "GitHub Security Advisory Npm",
						"URL": "https://github.com/advisories?query=type%3Areviewed+ecosystem%3Anpm"
					},
					"Title": "Prototype Pollution in copy-props",
					"Description": "The package copy-props before 2.0.5 are vulnerable to Prototype Pollution via the main functionality.",
					"Severity": "HIGH",
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L",
							"V3Score": 7.3
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 7.5,
							"V3Score": 9.8
						}
					},
					"References": [
						"https://github.com/advisories/GHSA-897m-rjf5-jp39",
						"https://github.com/gulpjs/copy-props/commit/2c738f5c52cfb384b43d977a56a3ab7ce465df9b",
						"https://github.com/gulpjs/copy-props/pull/7",
						"https://nvd.nist.gov/vuln/detail/CVE-2020-28503",
						"https://snyk.io/vuln/SNYK-JAVA-ORGWEBJARSNPM-1088047",
						"https://snyk.io/vuln/SNYK-JS-COPYPROPS-1082870"
					],
					"PublishedDate": "2021-03-23T10:15:00Z",
					"LastModifiedDate": "2021-03-26T19:04:00Z"
				},
				{
					"VulnerabilityID": "CVE-2022-38900",
					"PkgID": "decode-uri-component@0.2.0",
					"PkgName": "decode-uri-component",
					"PkgPath": "node_modules/decode-uri-component/package.json",
					"InstalledVersion": "0.2.0",
					"FixedVersion": "0.2.1",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2022-38900",
					"DataSource": {
						"ID": "ghsa",
						"Name": "GitHub Security Advisory Npm",
						"URL": "https://github.com/advisories?query=type%3Areviewed+ecosystem%3Anpm"
					},
					"Title": "decode-uri-component: improper input validation resulting in DoS",
					"Description": "decode-uri-component 0.2.0 is vulnerable to Improper Input Validation resulting in DoS.",
					"Severity": "LOW",
					"CweIDs": [
						"CWE-20"
					],
					"CVSS": {
						"nvd": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
							"V3Score": 7.5
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2022-38900",
						"https://github.com/SamVerschueren/decode-uri-component/commit/746ca5dcb6667c5d364e782d53c542830e4c10b9",
						"https://github.com/SamVerschueren/decode-uri-component/issues/5",
						"https://github.com/SamVerschueren/decode-uri-component/releases/tag/v0.2.1",
						"https://github.com/advisories/GHSA-w573-4hg7-7wgq",
						"https://github.com/sindresorhus/query-string/issues/345",
						"https://nvd.nist.gov/vuln/detail/CVE-2022-38900"
					],
					"PublishedDate": "2022-11-28T13:15:00Z",
					"LastModifiedDate": "2022-12-01T20:25:00Z"
				},
				{
					"VulnerabilityID": "CVE-2018-3728",
					"PkgID": "hoek@2.16.3",
					"PkgName": "hoek",
					"PkgPath": "node_modules/hoek/package.json",
					"InstalledVersion": "2.16.3",
					"FixedVersion": "\u003e=5.0.3 \u003e=4.2.1",
					"Layer": {},
					"SeveritySource": "nodejs-security-wg",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2018-3728",
					"DataSource": {
						"ID": "nodejs-security-wg",
						"Name": "Node.js Ecosystem Security Working Group",
						"URL": "https://github.com/nodejs/security-wg"
					},
					"Title": "hoek: Prototype pollution in utilities function",
					"Description": "hoek node module before 4.2.0 and 5.0.x before 5.0.3 suffers from a Modification of Assumed-Immutable Data (MAID) vulnerability via 'merge' and 'applyToDefaults' functions, which allows a malicious user to modify the prototype of \"Object\" via __proto__, causing the addition or modification of an existing property that will exist on all objects.",
					"Severity": "LOW",
					"CweIDs": [
						"CWE-471"
					],
					"CVSS": {
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:S/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 6.5,
							"V3Score": 8.8
						},
						"redhat": {
							"V3Vector": "CVSS:3.0/AV:L/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L",
							"V3Score": 2.9
						}
					},
					"References": [
						"http://www.securityfocus.com/bid/103108",
						"https://access.redhat.com/errata/RHSA-2018:1263",
						"https://access.redhat.com/errata/RHSA-2018:1264",
						"https://access.redhat.com/security/cve/CVE-2018-3728",
						"https://github.com/advisories/GHSA-jp4x-w63m-7wgm",
						"https://github.com/hapijs/hoek/commit/32ed5c9413321fbc37da5ca81a7cbab693786dee",
						"https://hackerone.com/reports/310439",
						"https://nodesecurity.io/advisories/566",
						"https://nvd.nist.gov/vuln/detail/CVE-2018-3728",
						"https://snyk.io/vuln/npm:hoek:20180212",
						"https://www.npmjs.com/advisories/566"
					],
					"PublishedDate": "2018-03-30T19:29:00Z",
					"LastModifiedDate": "2019-10-09T23:40:00Z"
				},
				{
					"VulnerabilityID": "CVE-2021-3918",
					"PkgID": "json-schema@0.2.3",
					"PkgName": "json-schema",
					"PkgPath": "node_modules/json-schema/package.json",
					"InstalledVersion": "0.2.3",
					"FixedVersion": "0.4.0",
					"Layer": {},
					"SeveritySource": "ghsa",
					"PrimaryURL": "https://avd.aquasec.com/nvd/cve-2021-3918",
					"DataSource": {
						"ID": "ghsa",
						"Name": "GitHub Security Advisory Npm",
						"URL": "https://github.com/advisories?query=type%3Areviewed+ecosystem%3Anpm"
					},
					"Title": "nodejs-json-schema: Prototype pollution vulnerability",
					"Description": "json-schema is vulnerable to Improperly Controlled Modification of Object Prototype Attributes ('Prototype Pollution')",
					"Severity": "CRITICAL",
					"CweIDs": [
						"CWE-1321"
					],
					"CVSS": {
						"ghsa": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 9.8
						},
						"nvd": {
							"V2Vector": "AV:N/AC:L/Au:N/C:P/I:P/A:P",
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V2Score": 7.5,
							"V3Score": 9.8
						},
						"redhat": {
							"V3Vector": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
							"V3Score": 9.8
						}
					},
					"References": [
						"https://access.redhat.com/security/cve/CVE-2021-3918",
						"https://github.com/advisories/GHSA-896r-f27r-55mw",
						"https://github.com/kriszyp/json-schema/commit/22f146111f541d9737e832823699ad3528ca7741",
						"https://github.com/kriszyp/json-schema/commit/b62f1da1ff5442f23443d6be6a92d00e65cba93a",
						"https://github.com/kriszyp/json-schema/commit/f6f6a3b02d667aa4ba2d5d50cc19208c4462abfa",
						"https://huntr.dev/bounties/bb6ccd63-f505-4e3a-b55f-cd2662c261a9",
						"https://linux.oracle.com/cve/CVE-2021-3918.html",
						"https://linux.oracle.com/errata/ELSA-2022-0350.html",
						"https://lists.debian.org/debian-lts-announce/2022/12/msg00013.html",
						"https://nvd.nist.gov/vuln/detail/CVE-2021-3918"
					],
					"PublishedDate": "2021-11-13T09:15:00Z",
					"LastModifiedDate": "2023-02-03T19:15:00Z"
				}
			]
		},
		{
			"Target": "secrets.txt",
			"Class": "secret",
			"Secrets": [
				{
					"RuleID": "stripe-publishable-token",
					"Category": "Stripe",
					"Severity": "LOW",
					"Title": "Stripe Publishable Key",
					"StartLine": 2,
					"EndLine": 2,
					"Code": {
						"Lines": [
							{
								"Number": 1,
								"Content": "",
								"IsCause": false,
								"Annotation": "",
								"Truncated": false,
								"FirstCause": false,
								"LastCause": false
							},
							{
								"Number": 2,
								"Content": "STRIPE_SECRET=****************************************",
								"IsCause": true,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "STRIPE_SECRET=****************************************",
								"FirstCause": true,
								"LastCause": true
							},
							{
								"Number": 3,
								"Content": "JWT_SECRET=****************************************",
								"IsCause": false,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "JWT_SECRET=****************************************",
								"FirstCause": false,
								"LastCause": false
							}
						]
					},
					"Match": "STRIPE_SECRET=****************************************",
					"Layer": {}
				},
				{
					"RuleID": "stripe-publishable-token",
					"Category": "Stripe",
					"Severity": "LOW",
					"Title": "Stripe Publishable Key",
					"StartLine": 3,
					"EndLine": 3,
					"Code": {
						"Lines": [
							{
								"Number": 1,
								"Content": "",
								"IsCause": false,
								"Annotation": "",
								"Truncated": false,
								"FirstCause": false,
								"LastCause": false
							},
							{
								"Number": 2,
								"Content": "STRIPE_SECRET=****************************************",
								"IsCause": false,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "STRIPE_SECRET=****************************************",
								"FirstCause": false,
								"LastCause": false
							},
							{
								"Number": 3,
								"Content": "JWT_SECRET=****************************************",
								"IsCause": true,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "JWT_SECRET=****************************************",
								"FirstCause": true,
								"LastCause": true
							},
							{
								"Number": 4,
								"Content": "API_SECRET=****************************************",
								"IsCause": false,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "API_SECRET=****************************************",
								"FirstCause": false,
								"LastCause": false
							}
						]
					},
					"Match": "JWT_SECRET=****************************************",
					"Layer": {}
				},
				{
					"RuleID": "stripe-publishable-token",
					"Category": "Stripe",
					"Severity": "LOW",
					"Title": "Stripe Publishable Key",
					"StartLine": 4,
					"EndLine": 4,
					"Code": {
						"Lines": [
							{
								"Number": 2,
								"Content": "STRIPE_SECRET=****************************************",
								"IsCause": false,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "STRIPE_SECRET=****************************************",
								"FirstCause": false,
								"LastCause": false
							},
							{
								"Number": 3,
								"Content": "JWT_SECRET=****************************************",
								"IsCause": false,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "JWT_SECRET=****************************************",
								"FirstCause": false,
								"LastCause": false
							},
							{
								"Number": 4,
								"Content": "API_SECRET=****************************************",
								"IsCause": true,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "API_SECRET=****************************************",
								"FirstCause": true,
								"LastCause": true
							},
							{
								"Number": 5,
								"Content": "SECRET_SECRET=****************************************",
								"IsCause": false,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "SECRET_SECRET=****************************************",
								"FirstCause": false,
								"LastCause": false
							}
						]
					},
					"Match": "API_SECRET=****************************************",
					"Layer": {}
				},
				{
					"RuleID": "stripe-publishable-token",
					"Category": "Stripe",
					"Severity": "LOW",
					"Title": "Stripe Publishable Key",
					"StartLine": 5,
					"EndLine": 5,
					"Code": {
						"Lines": [
							{
								"Number": 3,
								"Content": "JWT_SECRET=****************************************",
								"IsCause": false,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "JWT_SECRET=****************************************",
								"FirstCause": false,
								"LastCause": false
							},
							{
								"Number": 4,
								"Content": "API_SECRET=****************************************",
								"IsCause": false,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "API_SECRET=****************************************",
								"FirstCause": false,
								"LastCause": false
							},
							{
								"Number": 5,
								"Content": "SECRET_SECRET=****************************************",
								"IsCause": true,
								"Annotation": "",
								"Truncated": false,
								"Highlighted": "SECRET_SECRET=****************************************",
								"FirstCause": true,
								"LastCause": true
							},
							{
								"Number": 6,
								"Content": "",
								"IsCause": false,
								"Annotation": "",
								"Truncated": false,
								"FirstCause": false,
								"LastCause": false
							}
						]
					},
					"Match": "SECRET_SECRET=****************************************",
					"Layer": {}
				}
			]
		}
	]
}

module.exports = testData;