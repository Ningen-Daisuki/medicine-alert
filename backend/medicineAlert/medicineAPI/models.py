from django.db import models

class Users(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=256)
    password = models.CharField(max_length=256)
    mail_address = models.CharField(max_length=256)
    create_at = models.DateTimeField()
    update_at = models.DateTimeField(null=True)
    delete_at = models.DateTimeField(null=True)

    class Meta:
        db_table = 'users'


class Medicine(models.Model):
    medicine_id = models.AutoField(primary_key=True)
    medicine_name = models.CharField(max_length=100)
    grams = models.CharField(max_length=20)
    when_takes = models.IntegerField()

    class Meta:
        db_table = 'medicine'

class Alarm(models.Model):
    alarm_id = models.AutoField(primary_key=True)
    medicine = models.ForeignKey(Medicine, on_delete=models.RESTRICT)
    alart_times = models.TimeField(null=True)
    is_checked = models.BooleanField(default=False)

    class Meta:
        db_table = 'alarm'